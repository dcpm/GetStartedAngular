import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
//import { AppAlertsComponent } from './app-alerts/app-alerts.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: '**',redirectTo:'' },
];

@NgModule({
  imports: [

    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
