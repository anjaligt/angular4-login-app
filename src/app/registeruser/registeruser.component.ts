import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage'; 
import {Md5} from 'ts-md5/dist/md5';

@Component({
  moduleId: module.id,
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
	model: any = {};
  post:any;
  loading = false;

  constructor(private route: ActivatedRoute,
        private router: Router, private http: Http, private session:LocalStorageService) { }

  ngOnInit() {
  }

  register() {
  	this.loading = true;
  	var data = {firstName: this.model.firstName, lastName: this.model.lastName, userName: this.model.userName, password: Md5.hashStr(this.model.password), email: this.model.email};
  	console.log(data);
    var config = { headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}};
  	this.http.post("http://localhost/codeigniter-rest-api/index.php/api/users/registeredUser", data, config).subscribe(result => {
      if(result)
         {
           this.userDetail = JSON.parse(result["_body"]);
           this.session.store('session_data', this.userDetail["Data"]);//storing data in local storage service
         }
        this.router.navigate(['/dashboard']);
    });
  }

}
