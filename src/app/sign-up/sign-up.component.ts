import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegApiService } from '../reg-api.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupFrom: FormGroup;
  name: string = '';
  email: string = '';
  password: any = '';
  confirmpassword: any = '';
  mobile: any = '';
  address1: any = '';
  emp_role: any = ''
  constructor(private formbuilder: FormBuilder,private api: RegApiService,private router: Router, private routeract: ActivatedRoute){
    this.signupFrom = formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      address1: ['xyz india'],
      mobile: ['0000000000'],
      emp_role: ['']
    });
  }

  ngOnInit(): void {
    let role = this.routeract.snapshot.params.role;
  }

  signup() {

    delete this.signupFrom.value.confirmpassword;


    // this.api.registerapi(this.name, this.email, this.password, this.confirmpassword, this.address, this.mobile).subscribe(response => {
    this.api.registerapi(this.signupFrom.value).subscribe(response => {
      if (response.Code == '1') {
        this.router.navigateByUrl('/login')
      } else {
        alert("invalid user");
      }
    });
  }

}


