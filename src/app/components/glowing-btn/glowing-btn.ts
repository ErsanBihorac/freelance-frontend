import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glowing-btn',
  imports: [CommonModule],
  templateUrl: './glowing-btn.html',
  styleUrl: './scss/glowing-btn.scss',
})
export class GlowingBtn {
  @Input() text: string = '';
}
