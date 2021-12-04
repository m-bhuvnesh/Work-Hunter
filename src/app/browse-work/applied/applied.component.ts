import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { RegApiService } from 'src/app/reg-api.service';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit {
  post_title:any;
  post_description:any;
  post_time:any;
  role:any;
  salary:any;
  uid: any = [];
  post_id: any= []
  constructor(private api: RegApiService) { }

  ngOnInit(): void {
    this.uid = localStorage.getItem('userid')
    this.api.userapplied(this.uid ).subscribe(res => {
      this.post_id = res.Data;
      console.log('user',this.post_id);
      

    })
  }

}
