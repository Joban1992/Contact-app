import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from './components/button/button.component';
import { ContactStore } from './services/contact-store.service';
import  { ContactModal } from './components/modal/contact-modal.component';
import { CustomAlert } from './components/alerts/alert.component';
import { UtilService }  from './services/Util.service';

@NgModule({
  declarations: [
   Button,
   ContactModal,
   CustomAlert
  ],
  imports:[CommonModule, FormsModule],
  exports:[Button, ContactModal, CustomAlert],
  //providers:[ContactStore, AlertService]
})
export class SharedModule {
   static forRoot() : ModuleWithProviders{
     return {
       ngModule : SharedModule,
       providers : [ContactStore, UtilService]
     }
   }
}
