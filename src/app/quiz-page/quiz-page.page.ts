import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ToastController, LoadingController} from '@ionic/angular'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.page.html',
  styleUrls: ['./quiz-page.page.scss'],
})
export class QuizPagePage implements OnInit {


  public questions:any;
  data:any;
  totalScore:number =0;
  radiovalue;
  buttonColor:string = 'transparent';

  constructor(private route:ActivatedRoute, private router:Router, private toastCtrl:ToastController, private firestore:AngularFirestore, private afAuth:AngularFireAuth) {
    this.route.queryParams.subscribe(params => {
      if(params && params.title) {
        this.data = params.title;
      }

      
    })
    if(this.data = "History") {
      fetch('./assets/quizzes/history.json').then(res => res.json()).then(json => {
        this.questions = json.quizzes;
      })
    }

    if(this.data = "Who said it?") {
      fetch('./assets/quizzes/saying.json').then(res => res.json()).then(json => {
        this.questions = json.quizzes;
      })
    }

    if(this.data = "Guess the lyric") {
      fetch('./assets/quizzes/lyrics.json').then(res => res.json()).then(json => {
        this.questions = json.quizzes;
      })
    }

    if(this.data = "Capital") {
      fetch('./assets/quizzes/capital.json').then(res => res.json()).then(json => {
        this.questions = json.quizzes;
      })
    }
   }


  ngOnInit() {
  }

 
  RadioChangeEvent($event) {
    
    if($event.target.value ==="answer") {
      this.totalScore++; 
    }
      
  }

  async submit() {

    this.showToast("You scored " + this.totalScore + ' out of 5')
    let user = this.afAuth.currentUser;
    let uid = (await user).uid
    try {
      await this.firestore.collection('users').doc(uid).update({
        score: this.totalScore
      })
  } catch (error) {
    this.showToast(error)
  }


  }

  showToast(message:string) {
    this.toastCtrl.create({
      message:message,
      duration: 7000
    }).then(toastData => toastData.present())
  }




}
