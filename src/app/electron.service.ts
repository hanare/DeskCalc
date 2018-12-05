import { Injectable } from '@angular/core';
 
import {  BrowserWindow } from 'electron';
import * as childProcess from 'child_process';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

import { Subject, from } from  'rxjs';

@Injectable()
export class ElectronService {


  window:  BrowserWindow;

  constructor() {
    //check if platform is electron
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {     
      this.window = window['require']('electron').remote.getCurrentWindow();       
    }
  }
}