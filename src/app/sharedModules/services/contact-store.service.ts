import { Injectable } from '@angular/core';
import { Contact } from '../modal/Contact';

@Injectable()

export class ContactStore{
  contactList : Contact[] = [
    new Contact('Jobanpreet', 'Singh', 'jjjjjpreet@gmail.com', '9176176607', 'Active')
  ];

  getContactList() : Contact[] {
     return this.contactList;
  }

  addContact(contact : Contact){
    return new Promise((resolve, reject)=>{
       let res = this.contactList.push(contact);
       if(res){
         resolve(true);
       }else{
        reject();
       }
    })

  }

  updateContact(oldContact : Contact, newContact : Contact) : Promise<Boolean>{
    return new Promise((resolve, reject)=>{
    let res = this.contactList.splice(this.getContactIndex(oldContact), 1, newContact);
    if(res.length==1){
      resolve(true);
    }else{
     reject();
    }
    })
  }

  removeContact(contact : Contact) : Promise<Boolean>{
    return new Promise((resolve, reject)=>{
      let res = this.contactList.splice(this.getContactIndex(contact), 1);
      if(res.length==1){
        resolve(true);
      }else{
        reject();
      }
  })
  }

  getContactIndex(contact : Contact){
    console.log(this.contactList.indexOf(contact));
    return this.contactList.indexOf(contact);
  }
}
