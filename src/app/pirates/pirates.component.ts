import { Component } from '@angular/core';
import { PiratesService } from '../pirates.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pirates',
  standalone: true,
  imports: [NgFor],
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let pirate of pirates">
        {{ pirate }}
      </li>
    </ul>
    <button (click)="onSave($event)" [class]= "isActive ? 'btn btn-success' : 'btn btn-danger'">Save</button>
    `,
  styleUrl: './pirates.component.css',
})
export class PiratesComponent {
  title = 'List of Pirates';
  pirates: any;
  isActive = true;


  constructor(service: PiratesService){
    this.pirates = service.getPirates();
  }
  onSave($event: any){
    this.isActive = !this.isActive;
    console.log(this.isActive ? "true" : "false");
    
  }
}
