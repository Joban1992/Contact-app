import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UtilService{

  constructor() {}

  public modelState = new BehaviorSubject<any>({});

  setModelState(nextValue: any){
    this.modelState.next(nextValue);
  }

  public alertState = new BehaviorSubject<any>({});

  setAlertState(nextValue: any){
    this.alertState.next(nextValue);
    this.hideAlert();
  }

  hideAlert(){
    setTimeout(()=>{
      this.alertState.next({showAlert : false});
    },2000);
  }
}
