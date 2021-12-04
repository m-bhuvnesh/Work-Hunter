import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegApiService } from 'src/app/reg-api.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  postForm = new FormGroup({
    post_title: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    post_time: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    post_description: new FormControl('', Validators.required,),
    supportive_doc: new FormControl(''),
    // post_id:new  FormControl(''),
  })
  // post_id = '';
  // post: any = [];
  // post_title = '';

  constructor(private formbuilder: FormBuilder, private actvroute: ActivatedRoute, private router: Router, private api: RegApiService) {

  }

  // newPostFrom = new FormGroup({
  //   posttitle: new FormControl('', Validators.required),
  //   jobrole: new FormControl('', Validators.required),
  //   posttime: new FormControl('', Validators.required),
  //   salaryy: new FormControl('', Validators.required),
  //   post_desc: new FormControl('', Validators.required,),
  //   supportive_docu: new FormControl(''),

  // })
  post_id:any
  post_title: any
  post_time: any
  role: any
  salary: any
  post_description: any
  supportive_doc: any
  // postForm:FormGroup
  // newPostFrom: FormGroup;
  // constructor(private formbuilderData: FormBuilder, private router: Router, private api: RegApiService, private actvroute: ActivatedRoute) {


  // this.newPostFrom= formbuilderData.group({
  //     posttitle: [''],
  //     jobrole: [''],
  //   posttime: [''],
  //   salaryy: [''],
  //   post_desc: [''],
  //   supportive_docu: [''],

  // });    

  //   this.newPostFrom = new FormGroup({
  //     posttitle: new FormControl('', Validators.required),
  //     jobrole: new FormControl('', Validators.required),
  //     posttime: new FormControl('', Validators.required),
  //     salaryy: new FormControl('', Validators.required),
  //     post_desc: new FormControl('', Validators.required,),
  //     supportive_docu: new FormControl(''),

  //   })
  // }


  ngOnInit(): void {
    let edit = this.actvroute.snapshot.params.post_id;
    // debugger;
    // console.log(edit);

    this.api.viewpostdatabyid(edit).subscribe(res => {

      var res = res.Data
      this.post_id=edit;
      this.post_title = res[0].post_title
      this.role = res[0].role
      this.post_time = res[0].post_time
      this.salary = res[0].salary
      this.post_description = res[0].post_description
      this.supportive_doc = res[0].supportive_doc
      
    })


  }
  submit(){
    // alert("test update");
    // debugger;
    // var test_=this.postForm.value;
    this.api.updatepostdatabyid(this.postForm.value,this.post_id).subscribe(res => {
      console.log(res);
      //  debugger;
      //  var res=response;
      this.router.navigate(['./deshboard'])
 
    })
  //  console.log("call");
    
  }
}
