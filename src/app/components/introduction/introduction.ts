import { Component } from '@angular/core';
import { Fireflies } from "../fireflies/fireflies";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [Fireflies, CommonModule],
  templateUrl: './introduction.html',
  styleUrl: './scss/introduction.scss',
})
export class Introduction {
}
