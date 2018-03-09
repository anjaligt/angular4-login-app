import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageService } from 'ngx-webstorage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';

@Component({
    templateUrl: './editprofile.component.html',
    styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
 
    public input: any;
    public session_data:any= [];
 
    public constructor(private http: Http, private router: Router, private session:LocalStorageService) {
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        };
    }
    ngOnInit(){
        this.session_data = this.session.retrieve('session_data');
    }
 
    updateProfile() {
        alert('as');
        console.log(this.input.first_name);
        if(this.input.email && this.input.password) {
            var data = {};
            let headers = new Headers({ "content-type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            
            //this.http.post("http://localhost:3000/account", JSON.stringify(this.input), options)
              //  .map(result => result.json())
              this.http.post("http://local.vsports.com/user/my_profile/update_profile", data)
                .subscribe(result => {
                    this.router.navigate(["/login"]);
               });
        }
    }
 
}