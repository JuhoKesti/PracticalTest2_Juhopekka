import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { Login } from '../login/login'; // Imported login page // Juhopekka Kesti(1601537)

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


    login = Login; // Declared login as Login

    @ViewChild('username') user;
    @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  // registerUser() function for registering new users // Juhopekka Kesti(1601537)

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
      console.log('Would register user with ', this.user.value, this.password.value);
  }
}