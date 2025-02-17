import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})

export class AppComponent {
  public colapsarNavBar: boolean = false;
}
