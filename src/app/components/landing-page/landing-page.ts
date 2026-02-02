import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { Introduction } from "../introduction/introduction";
import { QuestionsAndAnswers } from "../questions-and-answers/questions-and-answers";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-landing-page',
  imports: [Navigation, Introduction, QuestionsAndAnswers, Contact],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
