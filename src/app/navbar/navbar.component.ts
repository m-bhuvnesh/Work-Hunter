import { Component, OnInit } from '@angular/core';
// import * as jQuery from 'jquery';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  useridlocal:any='';
  constructor() { 
    this.useridlocal=localStorage.getItem('roleid')
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.sidenav').sidenav();
      $(".dropdown-trigger").dropdown();
    });
  }

}
