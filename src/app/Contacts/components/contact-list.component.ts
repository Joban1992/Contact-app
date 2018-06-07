import { Component, OnInit } from '@angular/core';
import { Contact } from '../../sharedModules/modal/Contact';
import { ContactStore } from '../../sharedModules/services/contact-store.service';
import { UtilService } from '../../sharedModules/services/Util.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactList implements OnInit{
  
  contactList : Contact[] = [];
  modalTitle : string = "Add Contact";
  showModalFlag : Boolean = false;
  selectedContact : Contact;
  
  constructor(private contactStore : ContactStore, private utilService: UtilService){
    this.showModalFlag = false;
  }

  ngOnInit(){
    console.log('ngOnInit');
    this.contactList = this.contactStore.getContactList();

    this.utilService.modelState.subscribe((data)=>{
     if(data.deleteContact){
       this.removeContact(data.contact);
     }else{
       data.newContact = false;
       this.openModal("Update Contact");
       this.selectedContact = data.contact || {};
     }
    });
    this.closeModal();
  }

  openModal(modalTitle){
    this.selectedContact = {newContact : true};
    this.showModalFlag = true;
    this.modalTitle = modalTitle;
  }

  closeModal(){
    this.selectedContact = {};
    this.showModalFlag = false;
  }

  addContact(formData){
    let promise = null;
    let message = "Contact hass successfully updated";
    let data = formData.formData;
    let newUser :Contact = new Contact(data.firstName, data.lastName, data.email, data.phNumber, 'Active');
    if(formData.addFlag){
      promise = this.contactStore.addContact(newUser);
      message = "Contact added successfully.";
    }else{
      promise = this.contactStore.updateContact(this.selectedContact, newUser);
    }
    promise.then((res)=>{
      this.utilService.setAlertState({message : message, type: 'success'});
      this.selectedContact = {};
    }).catch((err)=>{
       this.utilService.setAlertState({message : "Error while adding a new contact.", type: "danger"});
       this.selectedContact = {};
    });
    this.closeModal();
  }

  removeContact(contact : Contact){
    this.contactStore.removeContact(contact).then((res)=>{
      this.utilService.setAlertState({message :"Contact successfully removed.", type: "success"});
    }).catch((err)=>{
      this.utilService.setAlertState({message : "Error while removing.", type: "danger"});
    })
  }
}
