import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class PlanetService {
  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    // this.apiUrl = 'https://swapi.co/api/planets/';
    this.apiUrl = '/api/planets/';
  }

  getData(sort: any, paginator: any) {
    let params = new HttpParams();

    const sortActive = sort.active;
    const order = sort.direction;
    const page = paginator.pageIndex;
    const pageSize = paginator.pageSize ? paginator.pageSize : 10;

    params = params.append('page', `${page + 1}`);
    params = params.append('limit', `${pageSize}`);

    if (sortActive) {
      params = params.append('sort', sortActive);
    }
    if (order) {
      params = params.append('order', order);
    }

    return this.http.get(this.apiUrl, {params});
  }
}
