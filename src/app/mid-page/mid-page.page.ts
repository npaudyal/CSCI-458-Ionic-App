import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-mid-page',
  templateUrl: './mid-page.page.html',
  styleUrls: ['./mid-page.page.scss'],
})
export class MidPagePage implements OnInit {

  data:any;

  

  constructor(private route:ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
      if(params && params.title) {
        this.data = params.title;
      }
    })
   }

  ngOnInit() {
  }

  study(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        title: this.data
      }
    }
    this.router.navigate(['study'], navigationExtras)
  }

  play(){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        title: this.data
      }
    }
    this.router.navigate(['quiz-page'], navigationExtras)
  }

}
