import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {AngularFireAuth} from '@angular/fire/auth'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  username: any;
  myArray: any[] = []

  

  constructor(public db: AngularFirestore,  public afAuth:AngularFireAuth)  {
    
   }

   async getPeople(){
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.db
      .collection("users")
      .doc(user.uid)
      .get()
      .subscribe((res) => {
        
        this.username = res.data();
        
      })
      }
      

    })
    
    
    this.db
  .collection("users")
  .get()
  .subscribe((ss) => {
    ss.docs.forEach((doc) => {
      this.myArray.push(doc.data());
      console.log(doc.data())
    });
    
  });
    
    
    // let uid = (await user).uid
    // this.db.collection('users').doc(uid).get()
    // .subscribe((ss) => {
    //   console.log(ss)
    // });

   }

  ngOnInit() {
    this.getPeople();
  }



}
