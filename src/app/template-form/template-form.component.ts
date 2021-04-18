import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user : User ={ firstName:"", lastName:"", email:"", role:""};
  public submitted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form:any){
    // console.log(form);
    if(form.valid) {
      this.submitted  = true;
    } else{
      this.validateForm(form);
    }
    // console.log(this.user);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field=>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelf : true })
    })
  }

  public hasError(field:any){
    return (field.invalid && field.touched && field.errors);
  }
}

interface User {
  firstName:String;
  lastName:string;
  role:string;
  email:string;
}