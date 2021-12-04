import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
name:any=''
  constructor(private router:Router) {
     this.name= localStorage.getItem('name');
     console.log(this.name);
     
   }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.sidenav').sidenav();
      $(".dropdown-trigger").dropdown();
    });
  }
  logout(){
    alert("are you sure!")
    this.router.navigate(['/logout'])
    }

}
