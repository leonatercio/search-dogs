import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DogService {
  apiUrl: any;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://dog.ceo/api/';
  }

  getAll() {
    return this.http.get<any>(this.apiUrl + 'breeds/list/all');
  }

  getByBreed(data) {
    return this.http.get<any>(this.apiUrl + `breed/${data}/images`);
  }
}
