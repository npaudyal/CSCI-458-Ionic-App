import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastController, LoadingController} from '@ionic/angular'
import {AngularFireAuth} from '@angular/fire/auth'
import {AngularFirestore} from '@angular/fire/firestore'


// import {auth} from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router, public afAuth:AngularFireAuth, private toastCtrl:ToastController, private loadingCtrl:LoadingController,
    private firestore:AngularFirestore
    
    ) { }

  email:string='';
  password:string='';


  ngOnInit() {
  }

  async login(){
    const {email, password} = this;

    if(this.formValidation()) {
      let loader = this.loadingCtrl.create({
        message:"Please wait..."
      });

      (await loader).present();

      try {
        await this.afAuth.signInWithEmailAndPassword(email, password)
        .then(data => {
          console.log(data)
          this.router.navigate(['tabs']);
        })
      } catch (error) {
        this.showToast(error)

          }

          (await loader).dismiss();
    }
    

  }
   
  showToast(message:string) {
    this.toastCtrl.create({
      message:message,
      duration: 3000
    }).then(toastData => toastData.present())
  }

  formValidation(){
    if(!this.email) {
      this.showToast("Enter email");
      return false;
    }

    if(!this.password) {
      this.showToast('Enter password')
      return false;
    }

    return true;
  }

  gotoSignup(){
    this.router.navigate(['signup'])
  }

  forgot(){
    this.router.navigate(['forgot'])
  }

}
