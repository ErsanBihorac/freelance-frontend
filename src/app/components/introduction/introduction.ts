import { Component } from '@angular/core';
import { Fireflies } from '../fireflies/fireflies';
import { CommonModule } from '@angular/common';
import { GlowingBtn } from '../glowing-btn/glowing-btn';
import { Button } from '../../interfaces/button.interface';

@Component({
  selector: 'app-introduction',
  imports: [Fireflies, CommonModule, GlowingBtn],
  templateUrl: './introduction.html',
  styleUrl: './scss/introduction.scss',
})
export class Introduction {
  glowingBtn: Button = {
    text: 'Get Started Now',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };
}
