import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {ToastController, LoadingController} from '@ionic/angular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email:string;

  constructor(private router:Router, private toaster:ToastController, private afAuth:AngularFireAuth, private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  async resetPassword(){
    if(this.email) {
      const loading = await this.loadingCtrl.create({
        message:'Sending reset password link',
        spinner:'crescent',
        showBackdrop:true
      });
      loading.present();

      this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        loading.dismiss();
        this.showToast("Please check your email for the reset link")
        this.router.navigate(['login'])
      }).catch((error) => {
        this.showToast(error.message)
      })
    } else {
      this.showToast("Please enter your email address")
    }
  }

  showToast(message:string) {
    this.toaster.create({
      message:message,
      duration: 3000
    }).then(toastData => toastData.present())
  }

}
