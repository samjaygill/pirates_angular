import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiratesService {

  constructor() { }

  getPirates(){
    return ["Captain Jack Sparrow", "Captain Blackbeard", "Captain Silver-Tongue", "Captain Deepsea Davey"]
  }
}
