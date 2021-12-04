import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.css']
})
export class HeaderPostComponent implements OnInit {
  name:any=''
  constructor(private router:Router) {
    this.name= localStorage.getItem('name');
    // console.log(this.name);
   }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
    $(".dropdown-trigger").dropdown();
  }
  logout(){
    alert("Are you sure!");
    this.router.navigate(['/logout'])
  }
}
