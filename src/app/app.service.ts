import { config } from './app.config';
import { Emails } from './app.model';
import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  emails: AngularFirestoreCollection;
  constructor(private db: AngularFirestore) {
    this.emails = db.collection<Emails>(config.collection_endpoint);
  }
  addEmails(emails) {
    this.emails.add(emails);
  }
}
