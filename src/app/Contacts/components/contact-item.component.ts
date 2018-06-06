import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '../../sharedModules/modal/Contact';
import { ContactStore } from '../../sharedModules/services/contact-store.service';



@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html'
})
export class ContactItem{
  constructor(private contactStore : ContactStore){}
  @Input() contact : Contact;

}
