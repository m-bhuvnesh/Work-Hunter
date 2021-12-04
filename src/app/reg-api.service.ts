import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';


// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class RegApiService {
  get: any;
  // apiurl='http://127.0.0.1:8000/accounts/register/'
  constructor(private http: HttpClient) {

  }
  loginapi(FormData: any): Observable<any> {
    var data = { 'username': FormData.email, 'password': FormData.password };
    // console.log(FormData); 

    return this.http.post('http://localhost/backend/login', { 'allData': data });
  }
  // registeration Api

  registerapi(FormData: string): Observable<any> {
    // console.log(FormData);

    return this.http.post<any>('http://localhost/backend/registration', { 'allData': FormData });

  }
  appnewpost(FormData: any, uid:any): Observable<any> {
    // console.log(FormData);

    return this.http.post<any>('http://localhost/backend/addnewpost', { 'allData': FormData } , uid)
  }
  viewallpost(post_id: any): Observable<any> {
    return this.http.get<any>('http://localhost/backend/viewallpost?post_id=' + post_id)
  }
  viewpostdatabyid(post_id: number): Observable<any> {
    return this.http.get('http://localhost/backend/viewpostdatabyid?post_id=' + post_id)
  }
  updatepostdatabyid(FormData: any, post_id: number): Observable<any> {
    // console.log(FormData);
    // debugger;
    return this.http.post('http://localhost/backend/updatepostdatabyid?post_id=' + post_id, { 'allData': FormData })

  }
  deletepostdatabyid(post_id: number): Observable<any> {

    return this.http.get('http://localhost/backend/deletepostdatabyid?pid=' + post_id)
  }
  fileupload(FileData: any): Observable<any> {
    // console.log( FileData);
    return this.http.post('http://localhost/backend/fileupload', FileData)


  }
  fldetails(uid: number, post_id: number, fname: string, lname: string, email: any, number: any, position: any, date: any, current_status: any, skills: any, file_url: any, document: any): Observable<any> {
     debugger
    // console.log(uid);

    var FormData = {
      uid: uid, post_id: post_id, fname: fname, lname: lname, email: email, number: number, position: position, date: date, current_status: current_status, skills: skills,
      file_url: file_url, document: document
    }
    var body = { 'allData': FormData };
    // console.log(body);
    return this.http.post<any>('http://localhost/backend/fldetails', body);

  }
  userapplied(uid: number):Observable<any> {
    // debugger
    console.log("service uid",uid );
    return this.http.get('http://localhost/backend/userapplied?uid=' + uid);
   
  }

}
