import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    post:any;                     // A property for our submitted form
    loading = false;
    //returnUrl: string;
    responseData:any = {};
    constructor(private route: ActivatedRoute,
        private router: Router, private http: Http) { }
    
    ngOnInit() {
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    
    login() {
        this.loading = true;
        var data = {email: this.model.username, password: this.model.password, device_type: 3};
        var config = { headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}};
        this.http.post("http://dev.vsports.com/user/auth/login", data).subscribe(result => {
            console.log(result);
            this.responseData = result;
         this.ngOnInit();
        }); 
    }
}