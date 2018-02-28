import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { LocalStorageService } from 'ngx-webstorage'; 
import {Md5} from 'ts-md5/dist/md5';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    model: any = {};
    post:any;                     // A property for our submitted form
    loading = false;
    returnUrl: string;
    userDetail: {};
    constructor(private route: ActivatedRoute,
        private router: Router, private http: Http, private session:LocalStorageService) { }

    
    ngOnInit() {
        //this.loadAllUsers();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        var data = {email: this.model.username, password: Md5.hashStr(this.model.password), device_type: 3};
        var modal = document.getElementById('id01');
        var config = { headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}};
        this.http.post("http://local.vsports.com/user/auth/login", data).subscribe(result => {
         //this.ngOnInit();
         if(result)
         {
             this.userDetail = JSON.parse(result["_body"]);
             localStorage.setItem("loginsessionkey", this.userDetail.data.session_key);
             this.session.store('session_data', this.userDetail.data.user_profile);//storing data in local storage service
                console.log(this.userDetail.data.user_profile);
          }
         modal.style.display = "none";
         this.router.navigate(['/dashboard']);
        }); 
        /*this.http.post("http://dev.vsports.com/user/auth/login", data).success(function(data){
            console.log(data);
        });*/
    }

}