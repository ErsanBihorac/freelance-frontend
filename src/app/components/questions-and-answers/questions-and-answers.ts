import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { QNACard } from "../q-n-a-card/q-n-a-card";
import { GlowingBtn } from "../glowing-btn/glowing-btn";
import { Button } from '../../interfaces/button.interface';

@Component({
  selector: 'app-questions-and-answers',
  imports: [CommonModule, QNACard, GlowingBtn],
  templateUrl: './questions-and-answers.html',
  styleUrl: './scss/questions-and-answers.scss',
})
export class QuestionsAndAnswers implements AfterViewInit {
    glowingBtn: Button = {
    text: 'Contact Us',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };
  
  questionAndAnswers = [
    {
      question: "Wo ist Duisburg?",
      answer: "In Nordrhein-Westfalen liegt Duisburg",
      active: true
    },
    {
      question: "Wo ist Bonn?",
      answer: "In Nordrhein-Westfalen liegt Bonn",
      active: false
    },
    {
      question: "Wo ist Berlin?",
      answer: "In Brandenburg liegt Berlin",
      active: false
    },
    {
      question: "Wo ist Hamburg?",
      answer: "In Bremen liegt Hamburg",
      active: false
    }
  ];
  
  @ViewChild('leftPart') leftPart!: ElementRef;
  wasViewed = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.wasViewed = true;
        observer.disconnect();
      }
    });

    observer.observe(this.leftPart.nativeElement);
  }

  toggleAnswer(index: number){
    this.questionAndAnswers[index].active = !this.questionAndAnswers[index].active;
  }
}
