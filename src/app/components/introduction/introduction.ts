import { Component } from '@angular/core';
import { Fireflies } from "../fireflies/fireflies";
import { CommonModule } from '@angular/common';
import { GlowingBtn } from "../glowing-btn/glowing-btn";

@Component({
  selector: 'app-introduction',
  imports: [Fireflies, CommonModule, GlowingBtn],
  templateUrl: './introduction.html',
  styleUrl: './scss/introduction.scss',
})
export class Introduction {
}
