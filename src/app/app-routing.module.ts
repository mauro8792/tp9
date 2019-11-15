import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListProductsComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  /* { path: 'sign-up', component: SignUpComponent }, */
  /* { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
