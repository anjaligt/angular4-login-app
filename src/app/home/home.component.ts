import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {
    model: any = {};
    post:any;                     // A property for our submitted form
    loading = false;
    returnUrl: string;
    userDetail: {};
    constructor(private route: ActivatedRoute,
        private router: Router, private http: Http) { }

    
    ngOnInit() {
        //this.loadAllUsers();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        var data = {email: this.model.username, password: this.model.password, device_type: 3};
        var modal = document.getElementById('id01');
        var config = { headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}};
        this.http.post("http://dev.vsports.com/user/auth/login", data).subscribe(result => {
         //this.ngOnInit();
         if(result)
         {
             this.userDetail = JSON.parse(result._body);
             localStorage.setItem("loginsessionkey", this.userDetail.data.session_key);
             //this.storage.set("loginKey", this.userDetail.data.session_key);

             localStorage.setItem("UserData", JSON.stringify(this.userDetail.data.user_profile));

             console.log(this.userDetail.data.user_profile);
             //console.log(this.storage.get(loginKey),'key');
             //return false;

         }
         modal.style.display = "none";
         this.router.navigate(['/dashboard']);
        }); 
        /*this.http.post("http://dev.vsports.com/user/auth/login", data).success(function(data){
            console.log(data);
        });*/
    }

    
}