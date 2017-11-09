import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';  //Importing TabsPage Juhopekka Kesti (1601537), Jere Lämsä (1601536), Jenni Hyvärinen (1601549)
import { RegisterPage } from '../register/register' // Importing Registeration page

import { AngularFireAuth } from 'angularfire2/auth';





@IonicPage()                    //Added Code from earlier module's to create authentication function Juhopekka Kesti (1601537), Jere Lämsä (1601536), Jenni Hyvärinen (1601549)
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  nextPage = TabsPage;          
  registerPage = RegisterPage;

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( TabsPage ); // User logs in which forwards him/her to TabsPage
      
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }
  public createAccount() {
    this.navCtrl.setRoot('RegisterPage');
  }

}