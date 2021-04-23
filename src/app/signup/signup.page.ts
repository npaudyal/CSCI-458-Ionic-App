import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'
import {ToastController, LoadingController} from '@ionic/angular'
import {AngularFirestore} from '@angular/fire/firestore'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router, public afAuth:AngularFireAuth, private toastCtrl:ToastController, private loadingCtrl:LoadingController,private firestore:AngularFirestore
    ) { }

  email:string='';
  password:string ='';
  name:string='';

  ngOnInit() {
  }

  async signup() {

    //Firebase authentication work
    const {name, email, password} = this;
    
    if(this.formValidation()) {
      let loader = this.loadingCtrl.create({
        message:"Please wait..."
      });

      (await loader).present();

      try {
        await this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(async (data) =>  {
          
          this.router.navigate(['tabs']);
          try {
              await this.firestore.collection('users').add({
                name:this.name,
                email: this.email,
                score:0
              })
          } catch (error) {
            this.showToast(error)
          }
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

  gotoLogin(){
    this.router.navigate(['login'])
  }
}
