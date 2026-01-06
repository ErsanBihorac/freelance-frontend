import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { Introduction } from "../introduction/introduction";

@Component({
  selector: 'app-landing-page',
  imports: [Navigation, Introduction],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
