import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { Introduction } from "../introduction/introduction";
import { QuestionsAndAnswers } from "../questions-and-answers/questions-and-answers";

@Component({
  selector: 'app-landing-page',
  imports: [Navigation, Introduction, QuestionsAndAnswers],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
