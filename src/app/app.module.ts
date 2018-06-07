import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactModule } from './Contacts/contacts.module';
import  { SharedModule } from './sharedModules/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ContactModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
