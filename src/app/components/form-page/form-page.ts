import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { GlowingBtn } from "../glowing-btn/glowing-btn";
import { Button } from '../../interfaces/button.interface';
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-form-page',
  imports: [Navigation, GlowingBtn, Contact, Footer],
  templateUrl: './form-page.html',
  styleUrl: './scss/form-page.scss',
})
export class FormPage {
  glowingBtn: Button = {
    text: 'Send Your Message',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };
}
