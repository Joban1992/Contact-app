import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-alert',
  templateUrl: './alert.component.html'
})
export class CustomAlert {
  @Input() type : string;
  @Input() alertText : string;

  constructor(){}
}
