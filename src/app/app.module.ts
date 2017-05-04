import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import * as firebase from 'firebase/app';

export const firebaseConf = {
    apiKey: "AIzaSyCBkQYsK8ZdmeevqPURwKDTzRldBBPVWGw",
    authDomain: "ngfire2-8d929.firebaseapp.com",
    databaseURL: "https://ngfire2-8d929.firebaseio.com",
    projectId: "ngfire2-8d929",
    storageBucket: "ngfire2-8d929.appspot.com",
    messagingSenderId: "175851541242"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireDatabaseModule, AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
