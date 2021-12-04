import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegApiService } from 'src/app/reg-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  post_id = '';
  post: any = [];
  // post_title = '';
  // apply='';
  constructor(private api:RegApiService,private router:Router, private actvroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actvroute.snapshot.params.post_id;
    this.api.viewallpost(this.post_id).subscribe(res => {
      // console.log(res.Data[0].post_id);
      this.post = res.Data;
      // console.log(this.post);

    })
  }
apply(post_id:any){
  this.router.navigateByUrl('/fldetails/' + post_id)
}
}
