/// <reference path="../../../tools/typings/tsd/firebase/firebase.d.ts" />

import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [MATERIAL_DIRECTIVES]
})
export class HomeCmp {
  firebaseUrl: string;
  loginRef: Firebase;
  authData: any;
  error: any;
  credentials: FirebaseCredentials;
  constructor() {
    this.firebaseUrl = 'https://cyf-test-1.firebaseio.com/';
    this.loginRef = new Firebase(this.firebaseUrl);
    this.loginRef.onAuth((user) => {
      if (user) {
        this.authData = user;
      }
    });
    this.credentials = {
      email: '',
      password: ''
    };
  }
  loginlol() {
    this.loginRef. authWithPassword(this.credentials, (error) => {
      this.error = error;
    });
  }
}
