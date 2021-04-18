import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user : User ={ firstName:"", lastName:"", email:"", role:""};

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(){
    console.log(this.user);
  }
}

interface User {
  firstName:String;
  lastName:string;
  role:string;
  email:string;
}