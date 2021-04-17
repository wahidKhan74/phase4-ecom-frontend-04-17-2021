import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // data 
  public username:string = "John Smith";
  public age:number = 29;
  public email:string = "john.smith@gmail.com";
  public userImage:string = "./assets/images/smiley.jpg";

  // object type -> custom type -> account
  public account:Account = { id:100, name:"john Doe", age:30 , balance:15029.342  };
  public color = { RED :'red', BLUE: 'blue', GREEN:'green' };
  public count = 10;
  public light:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  public increaseCounter(event){
    //console.log("Event Trigger");
    console.log(event);
    this.count +=10;
  }

  public changeBgColor(){
    this.light = !this.light;
  }
  public getClass(){
    return 'bg-container3';
  }
}

interface Account {
  id:number;
  name:string;
  balance:number;
  age :number;
}

