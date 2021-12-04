import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegApiService } from 'src/app/reg-api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fl-details',
  templateUrl: './fl-details.component.html',
  styleUrls: ['./fl-details.component.css']
})
export class FlDetailsComponent implements OnInit {
  fname = '';
  lname = '';
  email = '';
  number = '';
  position = '';
  date = '';
  current_status = '';
  skills = '';
  file_url = '';
  document = '';
  uid: any = []
  url_post_id: any
  post_id:any
  post: any = [];
  constructor(private formbuilder: FormBuilder, private router: Router, private actvroute: ActivatedRoute, private api: RegApiService) {
  }

  ngOnInit(): void {
    this.url_post_id = this.actvroute.snapshot.params.post_id;
    // console.log(this.url_post_id);
    
    this.uid = localStorage.getItem('userid')
    this.api.viewallpost(this.post_id).subscribe(res => {
      // console.log(res.Data[0].post_id);
      this.post = res.Data;
      console.log(this.post);
      
      // console.log(this.post);

    })
  }
  postdata() {
    // debugger
    this.api.fldetails(this.uid, this.url_post_id, this.fname, this.lname, this.email, this.number, this.position, this.date, this.current_status, this.skills, this.file_url, this.document)
      .subscribe(res => {
        console.log('uid',res);
        

        this.router.navigate(['./viewpost'])
      })
      // this.api.viewallpost(this.post_id).subscribe(res => {
      //   // console.log(res.Data[0].post_id);
      //   this.post = res.Data;
      //   // console.log(this.post);
  
      // })
      
  }
}