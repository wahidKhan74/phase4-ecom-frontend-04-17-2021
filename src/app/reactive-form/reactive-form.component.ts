import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public exampleForm :FormGroup;
  submitted: boolean;

  // DI -> by adding properties in constrctor.
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.exampleForm = this.formBuilder.group({
      firstName : ['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      lastName :['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      email: ['',[Validators.required, Validators.email]],
      role :['',Validators.required]
    });

  }

  public hasError(field:any){
    return (this.exampleForm.get(field).invalid && this.exampleForm.get(field).touched 
    && this.exampleForm.get(field).errors);
  }

  public submitForm(form:any){
    // console.log(form);
    if(form.valid) {
      this.submitted  = true;
    } else{
      this.validateForm(form);
    }
    console.log(this.exampleForm.value);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field=>{
      const control = form.get(field);
      if( control instanceof FormControl){
        control.markAsTouched({ onlySelf : true })
      } else{
        this.validateForm(control);
      }
    })
  }

  get firstName() { return this.exampleForm.get('firstName')}
  get lastName() { return this.exampleForm.get('lastName')}
  get email() { return this.exampleForm.get('email')}
  get role() { return this.exampleForm.get('role')}
}
