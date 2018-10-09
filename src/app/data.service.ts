import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = {
    "general": {
      "city": "Gandhinagar",
      "date": "2018-10-28T08:30:00Z",
      'slogan': 'Be a hero. Be a GDG!'
    }
  }
  constructor() { }
}
