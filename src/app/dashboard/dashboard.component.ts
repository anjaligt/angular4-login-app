import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
//import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
	inputs: ['userDetail'],
	
})

export class DashboardComponent implements OnInit {
	 UserData = {};
	 public data:any=[];
	 loginSessionKey = "";
	 public session_data:any= [];
	constructor(private route: ActivatedRoute,
        private router: Router, private http: Http, private session:LocalStorageService) { }
	ngOnInit() {
		this.loginSessionKey = localStorage.getItem("loginsessionkey");
		//this.UserData = JSON.parse(localStorage.getItem("UserData")); 
		this.session_data = this.session.retrieve('session_data'); // retieving 
		
	}
}