import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
//import { LoginComponent } from './login/index';
import { RegisteruserComponent } from './registeruser/index';
import { DashboardComponent } from './dashboard/index';
import { EditprofileComponent } from './editprofile/index';


const appRoutes: Routes = [

	{                                          // removed square bracket
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },{
         path: 'home',
         component: HomeComponent
      },{
        path: 'register',
        component: RegisteruserComponent 
      },

	//{ path: 'login', component: LoginComponent},
  { path: 'register', component: RegisteruserComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit', component: EditprofileComponent },
  { path: '**', redirectTo: '' },
  
];

export const routing = RouterModule.forRoot(appRoutes);