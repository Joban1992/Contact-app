import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactList } from './components/contact-list.component';
import { ContactItem } from './components/contact-item.component';
import  { SharedModule } from '../sharedModules/shared.module';

@NgModule({
  declarations: [
    ContactList,
    ContactItem
  ],
  imports:[CommonModule, SharedModule],
  exports:[ContactList]
})
export class ContactModule { }
