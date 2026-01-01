import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyBtn } from "../fancy-btn/fancy-btn";

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, FancyBtn],
  templateUrl: './navigation.html',
  styleUrl: './scss/navigation.scss',
})
export class Navigation {
  animation: boolean = false;
  navigationOpen: boolean = false;
  animationsEnabled: boolean = false;
  
  ngAfterViewInit(){
    requestAnimationFrame(() => {
      this.animationsEnabled = true;
    });
  }

  toggleAnimation(){
    if (this.animation == false) {
      this.animation = true;
      this.navigationOpen = true;
    } else {
      this.animation = false;
      this.navigationOpen = false;
    }
  }

  openMenu(){
    if (this.animationsEnabled == true) {
      this.toggleAnimation();
    }
  }
}
