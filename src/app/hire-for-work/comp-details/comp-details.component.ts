
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegApiService } from 'src/app/reg-api.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {

  constructor(private api: RegApiService, private actvroute: ActivatedRoute, private router: Router) { }

  post_id = '';
  post: any = [];
  post_title = '';

  ngOnInit(): void {
    this.api.viewallpost(this.post_id).subscribe(res => {
      // console.log(res.Data[0].post_id);
      this.post = res.Data;
      // console.log(this.post);

    })
  }
  edit(post_id: any) {
    // console.log(post_id);

    this.router.navigate(['/edit/' + post_id])
  }

  delete(post_id: number) {
// alert('Are you sure')
// var Swal:any;
// Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!'
// }).then((result: { isConfirmed: any; }) => {
//   if (result.isConfirmed) {
//     Swal.fire(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   }
// })
    this.api.deletepostdatabyid(post_id).subscribe(res => {
          // console.log(res);
        
         let cururl= this.router.url;
         this.router.routeReuseStrategy.shouldReuseRoute=()=> false;
         this.router.onSameUrlNavigation= 'reload';
         this.router.navigate([cururl]);
          
        });
  }
}
