import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {

  data:any;
  flashcards: any;

  constructor(private route:ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
      if(params && params.title) {
        this.data = params.title;
      }


      //Database work.....


      
      
    })
    if(this.data = "History") {
      fetch('./assets/quizzes/history.json').then(res => res.json()).then(json => {
        this.flashcards = json.quizzes;
      })
    }

    if(this.data = "Who said it?") {
      fetch('./assets/quizzes/saying.json').then(res => res.json()).then(json => {
        this.flashcards = json.quizzes;
      })
    }

    if(this.data = "Guess the lyric") {
      fetch('./assets/quizzes/lyrics.json').then(res => res.json()).then(json => {
        this.flashcards = json.quizzes;
      })
    }

    if(this.data = "Capital") {
      fetch('./assets/quizzes/capital.json').then(res => res.json()).then(json => {
        this.flashcards = json.quizzes;
      })
    }
   }

  ngOnInit() {
  }

}
