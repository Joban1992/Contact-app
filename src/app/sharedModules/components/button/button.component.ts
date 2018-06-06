import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UtilService } from '../../services/Util.service';
import { Contact } from '../../modal/Contact';

@Component({
  selector: 'icon-button',
  templateUrl: './button.component.html'
})
export class Button {
  @Input() buttonType : string;
  @Input() contact : Contact;

  constructor(private utilService: UtilService){

  }

  handleClick(key){
    let obj = {modelFlag : false, deleteContact : true, contact: this.contact};
    if(key==1){
      obj = {modelFlag: true, deleteContact : false, contact: this.contact}
    }
    this.utilService.setModelState(obj);
  }

}
