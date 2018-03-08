import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
//import { LoginComponent } from './login/index';
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
      },

	//{ path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit', component: EditprofileComponent },
	{ path: '**', redirectTo: '' },
  
];

export const routing = RouterModule.forRoot(appRoutes);