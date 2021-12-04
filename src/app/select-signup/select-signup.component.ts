import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-select-signup',
  templateUrl: './select-signup.component.html',
  styleUrls: ['./select-signup.component.css'],
  // providers:[NgbCarouselConfig]
})
export class SelectSignupComponent implements OnInit {

  constructor( private router: Router ,private routeract:ActivatedRoute) {

   }

  ngOnInit(): void {
    // let role = this.routeract.snapshot.params.role 
  }
  onclick(employee:any){
    this.router.navigateByUrl('/signup/emp')
  }

}
