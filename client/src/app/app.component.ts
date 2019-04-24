import {HttpClient, HttpParams} from '@angular/common/http';
import {Component, OnInit, ViewChild, EventEmitter, ElementRef} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
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
  displayedColumns: string[] = [
    'name',
    'terrain',
    'population',
    'residents_amount',
    'films_amount'
  ];
  database: any | null;
  expandedElement: any;
  data: PlanetRecord[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  searchValue = null;
  searchRequest = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isExpansionDetailRow = (i: number, row: object) => row.hasOwnProperty('detailRow');

  constructor(
    private http: HttpClient,
    private PlanetService: PlanetService
  ) {}

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page, this.searchRequest)
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
