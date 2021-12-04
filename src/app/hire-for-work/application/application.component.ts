import { Component, OnInit } from '@angular/core';
import { RegApiService } from 'src/app/reg-api.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  uid: any = [];

  post_id: any
  // localuid: any = [];
  constructor(private api: RegApiService) { }

  ngOnInit(): void {
    // this.localuid = localStorage.getItem('userid')
    this.api.userapplied(this.uid).subscribe(res => {
      this.uid = res.data
      console.log("uid data", res);
      //  console.log(this.localuid);
    })

  }

}
