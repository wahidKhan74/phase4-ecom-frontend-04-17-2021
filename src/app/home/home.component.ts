import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text : string;
  sampleText :string;
  
  constructor() { }

  ngOnInit(): void {
  }

  public saveAction($event){
    console.log($event);
  }
  public enterText($event) {
    // console.log($event);
    this.text = $event.target.value;
  }
}
