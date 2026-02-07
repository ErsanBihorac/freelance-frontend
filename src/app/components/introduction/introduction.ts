import { Component, EventEmitter, Output } from '@angular/core';
import { Fireflies } from '../fireflies/fireflies';
import { CommonModule } from '@angular/common';
import { GlowingBtn } from '../glowing-btn/glowing-btn';
import { Button } from '../../interfaces/button.interface';
import { Router } from "@angular/router";

@Component({
  selector: 'app-introduction',
  imports: [Fireflies, CommonModule, GlowingBtn],
  templateUrl: './introduction.html',
  styleUrl: './scss/introduction.scss',
})
export class Introduction {
  @Output() scrollNext = new EventEmitter<void>();

  linkedin: string = 'https://www.linkedin.com/in/ersan-bihorac/';
  github: string = 'https://github.com/ErsanBihorac';
  mail: string = 'contact@ersan-bihorac.de';

  glowingBtn: Button = {
    text: 'Get Started Now',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };

  constructor(private router: Router) {}

  navigateTo(adress: string) {
    window.open(adress, '_blank');
  }

  navigateToContact() {
    this.router.navigate(['/contact'])
  }

  navigateToProjects() {
    this.router.navigate(['/projects'])
  }

  openMail() {
    const subject = encodeURIComponent('Contact via Website');
    const body = encodeURIComponent('Hi,\n\n ...');

    window.location.href = `mailto:${this.mail}?subject=${subject}&body=${body}`;
  }

  scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}
