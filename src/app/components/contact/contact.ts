import { Component } from '@angular/core';
import { GlowingBtn } from "../glowing-btn/glowing-btn";
import { Button } from '../../interfaces/button.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  imports: [GlowingBtn, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './scss/contact.scss',
})
export class Contact {
  glowingBtn: Button = {
    text: 'Contact Me',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };
}
