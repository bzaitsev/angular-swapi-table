import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

import PlanetService from './services/planets.service';

export interface PlanetApi {
  results: PlanetRecord[];
  count: number;
}

export interface PlanetRecord {
  name: string;
  films: [];
  residents: [];
  noDetails: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class AppComponent implements OnInit {
  displayedColumns: string[];
  database: any | null;
  expandedElement: any;
  data: PlanetRecord[];
  resultsLength: number;
  isLoadingResults: boolean;
  isRateLimitReached: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isExpansionDetailRow: any;

  constructor(
    private PlanetService: PlanetService
  ) {
    this.displayedColumns = [
      'name',
      'terrain',
      'population',
      'residents_amount',
      'films_amount'
    ];

    this.isLoadingResults = true;
    this.isRateLimitReached = false;
    this.data = [];
    this.resultsLength = 0;
    this.isExpansionDetailRow = (i: number, row: object) => row.hasOwnProperty('detailRow');
  }

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.PlanetService.getData(this.sort, this.paginator);
      }),
      map((data: PlanetApi) => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.count;

        const result = [];

        if (data.results) {
          data.results.forEach(item => {
            if (!item.films.length && !item.residents.length) {
              item.noDetails = true;
            }

            result.push(item, {
              detailRow: true,
              loaded: false,
              item
            });
          });
        }

        return result;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.data = data);
  }

  onRowClick(event, row) {
    if (row.noDetails) {
      return;
    }

    if (this.expandedElement === row) {
      this.expandedElement = null;
    } else {
      this.expandedElement = row;
    }
  }
}
