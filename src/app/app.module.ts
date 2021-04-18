import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './products/create/create.component';
import { UpdateComponent } from './products/update/update.component';
import { DetailsComponent } from './products/details/details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    FooterComponent,
    NavbarComponent,
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
    SignInComponent,
    SignUpComponent,
    NotfoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
