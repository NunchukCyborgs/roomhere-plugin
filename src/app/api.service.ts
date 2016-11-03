import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Facet } from './facet';
import { BASE_API_URL } from './config';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getProperties() {
    return this.http.post(`${BASE_API_URL}/properties/filtered_results`, new Facet())
      .map(i => i.json().results);
  }
}
