
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegApiService } from '../reg-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  email: string = '';
  password: any = '';
  username: any = '';
  error = '';
  // error2='';
  user_id = '';
  uid = '';
  // router: any;

  constructor(private formbuilder: FormBuilder, private api: RegApiService, private router: Router) {
    this.loginFrom = formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //   $.ajax({
    //     type: "POST",
    //     url: 'http://127.0.0.1:8000/accounts/authenticate_user/',
    //     // data: data,
    //     // success: success,
    //     dataType: 'json'
    //   });
    // }
    // PostData(loginForm: any) {
    //   console.log(loginForm.value);
    // }
    // loginapi() { 

    //   if (this.password != '' && this.username != '') {
    //     this.api.loginapi(this.username, this.password).subscribe(response => {
    //       console.log(response);
    //       localStorage.setItem('user', JSON.stringify(response.Data));
    //       localStorage.setItem('userid', response.Data.user_id);
    // var postData = {"email":this.username,"password":this.password}
    // var ajaxParam = {
    //   dataType:"json",
    //   type: "POST",
    //   headers: {
    //     "X-CSRFToken": "",'Access-Control-Allow-Origin': '*'
    //   },
    //   url: 'http://127.0.0.1:8000/accounts/authenticate_user/',
    //   data: postData,
    //   success: function () {
    //     alert()

    //   },
    // };

    //   var data = {}

    //   var ajaxParam = {
    //     url: "http://127.0.0.1:8000/accounts/authenticate_user/",
    //     data:postData,
    //     type: 'POST',
    //     dataType: 'json',
    //     cors: true ,
    //     contentType:'application/json',
    //     secure: true,
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },

    //     success: function (){

    //     }
    // }
    //   $.ajax(ajaxParam)

    // $.ajax(ajaxParam);
    // this.router.navigate(['admin']);
    //     if (response.Data.role_id==1) {
    //       this.routr.navigateByUrl('/post');
    //     } else{
    //       this.routr.navigate(['home']);
    //     }
    // console.log("called");


    // })
    //     } else {
    //       this.error = "User name and password is required";

    //     }
  }

  loginapi() {

    if (this.loginFrom.value != '') {
      this.api.loginapi(this.loginFrom.value).subscribe(response => {
        // console.log(response);
        localStorage.setItem('user', JSON.stringify(response.Data));
        localStorage.setItem('roleid', response.Data.emp_role);
        localStorage.setItem('userid', response.Data.uid);
        localStorage.setItem('name', response.Data.name);

        if (response.Data.emp_role == 'Employee') {
          this.router.navigate(['../deshboard']);
        }
         else if (this.password != response.Data.password && this.email != response.Data.email) 
         {

          // console.log(response.Data.password);
          
          // let currenturl = this.router.url;
          // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          // this.router.onSameUrlNavigation = 'reload';
          // this.router.navigate([currenturl])
          this.error = 'Please check email and password again';
        }

        if (response.Data.emp_role == 'Freelancer') {
          this.router.navigate(['browse-work/viewpost']);
        }
        else if (this.password != response.Data.password && this.email != response.Data.email) 
        {
// console.log(response.Data.password);

          // let currenturl = this.router.url;
          // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          // this.router.onSameUrlNavigation = 'reload';
          // this.router.navigate([currenturl])
          this.error= 'wrong email and password';
        }
        // if (this.password = response.password) {
        //   alert('Wrong Password' + '&#128531;')
        // }
        else {

          alert('So Sad Try Again')
        }

      })
    }
    // else {
    //   this.error = "Email name and password is required";

    // }
  }
}
