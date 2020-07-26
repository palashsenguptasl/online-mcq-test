import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/html5.json', name: 'HTML 5' },
      { id: 'data/css3.json', name: 'CSS3' },
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/angular.json', name: 'Angular' }
    ];
  }

}
