import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router:Router, public afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  logout(){

    this.afAuth.signOut().then(() => {
      this.router.navigate(['login']);
    })

    

  }

}
