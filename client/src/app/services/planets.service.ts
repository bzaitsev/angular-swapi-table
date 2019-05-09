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
    this.apiUrl = '/api/planets/';
  }

  getData(sort: any, paginator: any) {
    let params = new HttpParams();

    const pageSize = paginator.pageSize || 10;

    params = params.append('page', `${paginator.pageIndex + 1}`);
    params = params.append('limit', `${pageSize}`);

    if (sort.active) {
      params = params.append('sort', sort.active);
    }

    if (sort.direction) {
      params = params.append('order', sort.direction);
    }

    return this.http.get(this.apiUrl, {params});
  }
}
