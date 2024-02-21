import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PiratesService {
  constructor() {}

  getPirates() {
    return [
      {
        name: 'Captain Jack Sparrow',
        ship: 'Bluebell ship',
      },
      {
        name: 'Captain Blackbeard',
        ship: 'Bluebell ship',
      },
      {
        name: 'Captain Silver-Tongue',
        ship: 'Bluebell ship',
      },
      {
        name: 'Captain Deepsea Davey',
        ship: 'Bluebell ship',
      },
      {
        name: 'Captain McFilthy',
        ship: 'Bluebell ship',
      },
      {
        name: 'Captain Sandy Shores',
        ship: 'Bluebell ship',
      },
      {
        name: 'Captain Fish-Lips',
        ship: 'Bluebell ship',
      },
    ];
  }
}
