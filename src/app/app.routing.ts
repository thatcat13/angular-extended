
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';

//Notice appRoutes has been declared as the Routes data type. This file has access to Routes because we've imported { Routes, RouterModule }

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
  {
    path: 'about',
    component: AboutComponent
  }
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }  
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//The return value of forRoot() method is passed into the new variable called routing.
//Our routing object is a ModuleWithProviders data type. This is simply a special type of module that includes something called providers to help make information (like our routes) available to the rest of the application
//Notice that routing is being exported with the export keyword and that it's a constant.
//This makes our appRoutes list of routes available to our root module in app.module.ts

// Each route in an Angular application is actually a special type of object with code that looks like this:
// {
//   path: '',
//   component: WelcomeComponent
// },
