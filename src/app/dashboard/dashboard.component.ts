import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
	inputs: ['userDetail'],
	
})

export class DashboardComponent implements OnInit {
	 UserData = {};
	 public data:any=[];
	 loginSessionKey = "";
	constructor(private route: ActivatedRoute,
        private router: Router, private http: Http,
        private storage: WebStorageService) { }
	ngOnInit() {
		this.loginSessionKey = localStorage.getItem("loginsessionkey");
		this.UserData = JSON.parse(localStorage.getItem("UserData")); 
		/*this.data[key]= this.storage.get(loginKey);
    	console.log(this.data);*/
		//this.UserDetail = JSON.parse(this.UserData);
		console.log(this.UserData,'UserDetail123');
	}
}