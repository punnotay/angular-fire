import { Component } from '@angular/core';
import { AngularFireDatabase,  
        FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.items = db.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.name = af.auth.signInAnonymously();
  }

  login() {
    this.af.auth.signInAnonymously();
  }

  Send(desc: string) {
    this.items.push({message: desc});
    this.msgVal = '';
  }
}
