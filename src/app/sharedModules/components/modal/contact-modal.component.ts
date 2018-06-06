import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Contact } from '../../modal/Contact';


@Component({
  selector: 'contact-modal',
  templateUrl: './contact-modal.component.html'
})
export class ContactModal implements OnInit{
  addContactFlag : Boolean = false;
  constructor(){
  console.log('open')
  }
  @Input() contact : Contact;
  @Input() title : string;
  @Output() addContact = new EventEmitter();
  @Output() closeModal = new EventEmitter();


  ngOnInit(){
   if((this.contact && this.contact.newContact)){
     this.addContactFlag = true;
     this.contact = new Contact();
   }
   /*if(!this.contact.newContact){
     this.addContactFlag = false;
   }*/

  }

  addContactToList(event){
   //send data from here
   this.addContact.emit({formData : event, addFlag : this.addContactFlag});
  }

  closeModalFun(){
    this.closeModal.emit();
  }

}
