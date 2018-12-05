import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {


  expression: string;
  constructor() {
    this.expression='';
   }

  ngOnInit() {
  }

  enteredValue(exp: string){
    console.log("main ",exp);
    this.expression=exp;
  }
}
