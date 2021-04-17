import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './products/create/create.component';
import { UpdateComponent } from './products/update/update.component';
import { DetailsComponent } from './products/details/details.component';

// create routes
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  // map child routes.
  { path: 'products', children:[
    { path:'' , component:ProductsComponent },
    { path:'create' , component:CreateComponent },
    { path:'update' , component:UpdateComponent },
    { path:'details' , component:DetailsComponent }
  ]},
  { path: 'users', component:UsersComponent},
  { path: 'sign-in', component:SignInComponent},
  { path: 'sign-up', component:SignUpComponent},
  { path: '**', component:NotfoundComponent},
];

// register routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
