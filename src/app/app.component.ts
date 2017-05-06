import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase,  
        FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  name: Observable<firebase.User>;
  msgVal: string = '';

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.items = db.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.name = this.af.authState;
  }

  login() {
    this.af.auth.signInAnonymously();
  }

  logout() {
    this.af.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({message: desc});
    this.msgVal = '';
  }
}
