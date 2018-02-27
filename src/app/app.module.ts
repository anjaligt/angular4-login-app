import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { StorageServiceModule} from 'angular-webstorage-service';
import { Ng2Webstorage } from 'ngx-webstorage'; 

// used to create fake backend
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './home/index';
//import { LoginComponent } from './login/index';
import { DashboardComponent } from './dashboard/index';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        routing,
        Ng2Webstorage
    ],
    declarations: [
        AppComponent,
       	HomeComponent,
        DashboardComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }