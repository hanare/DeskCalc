import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.css']
})
export class NumberPadComponent implements OnInit {
  tiles: Tile[] = [
    
    {text: '7', cols: 1, rows: 1, color: 'lightblue'},
    {text: '8', cols: 1, rows: 1, color: 'lightblue'},
    {text: '9', cols: 1, rows: 1, color: 'lightblue'},
    {text: '<', cols: 1, rows: 1, color: 'lightblue'},
    {text: '4', cols: 1, rows: 1, color: 'lightblue'},
    {text: '5', cols: 1, rows: 1, color: 'lightblue'},
    {text: '6', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'x', cols: 1, rows: 1, color: 'lightblue'},
    {text: '1', cols: 1, rows: 1, color: 'lightblue'},
    {text: '2', cols: 1, rows: 1, color: 'lightblue'},
    {text: '3', cols: 1, rows: 1, color: 'lightblue'},
    {text: '-', cols: 1, rows: 1, color: 'lightblue'},
    {text: '0', cols: 1, rows: 1, color: 'lightblue'},
    {text: '.', cols: 1, rows: 1, color: 'lightblue'},
    {text: '=', cols: 1, rows: 1, color: 'lightblue'},
    {text: '+', cols: 1, rows: 1, color: 'lightblue'},
  ];

  @Output('usersInput') userInput =  new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  read( input: string){

    console.log("click ",input);
    this.userInput.emit(input);
  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;

}
