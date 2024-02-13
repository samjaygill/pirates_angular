import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PirateComponent } from './pirate/pirate.component';
import { PiratesComponent } from './pirates/pirates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PirateComponent, PiratesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pirates';
}
