import { Component } from '@angular/core';
import { ElectronService } from './electron.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeskCalc';  

  constructor(private _electronService: ElectronService){
    console.log("constructor");
  }

  ngOnInit(){
    console.log("loading ng on init")
  }

  minimizeWindow(){
    console.log("min");
    this._electronService.window.minimize();
  }
  closeWindow(){ 
    console.log("close");
    this._electronService.window.close();
  }
}
