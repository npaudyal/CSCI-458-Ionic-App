import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MidPagePage } from '../mid-page/mid-page.page';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {}

  historyQuiz(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        title:"History"
      }
    }
    this.router.navigate(['mid-page'], navigationExtras)
  }

  saidQuiz(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        title:"Who said it?"
      }
    }
    this.router.navigate(['mid-page'], navigationExtras);
  }

  capitalQuiz(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        title:"Capital"
      }
    }
    this.router.navigate(['mid-page'], navigationExtras);
  }

  lyricQuiz(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        title:"Guess the lyric"
      }
    }
    this.router.navigate(['mid-page'], navigationExtras);
  }

}
