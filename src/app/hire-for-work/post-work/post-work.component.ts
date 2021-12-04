import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegApiService } from 'src/app/reg-api.service';

@Component({
  selector: 'app-post-work',
  templateUrl: './post-work.component.html',
  styleUrls: ['./post-work.component.css']
})
export class PostWorkComponent implements OnInit {
  postForm = new FormGroup({
    post_title: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    post_time: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    post_description: new FormControl('', Validators.required,),
    supportive_doc: new FormControl(''),
    // uid:new FormControl('')
    // uid: any = []
  })
  fileName = ''
   uid: any = []

  constructor(private formbuilder: FormBuilder, private router: Router, private api: RegApiService) {
  }

  ngOnInit(): void { }

  onSubmit() {
    this.uid = localStorage.getItem('userid')
    console.log(this.uid);

    this.api.appnewpost(this.postForm.value, this.uid).subscribe(response => {
      console.log(response);

      localStorage.setItem('post_id', JSON.stringify(response.Data.post_id));

      localStorage.setItem('post', response.Data.post_id);
      // this.router.navigate(['./deshboard'])
      console.log(response);
    })
  }
  selectfile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);

      this.api.fileupload(formData).subscribe(res => {
        // console.log("fileupload"+res);

      })
    }
  }
}
