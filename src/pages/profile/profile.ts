import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { WelcomePage } from '../welcome/Welcome';
// Welcome page needs to be imported so that it can be used in function below // Juhopekka Kesti(1601537)




@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  

  constructor(public navCtrl: NavController, public app: App) {

  }

  // New Logout function // Juhopekka Kesti(1601537)

  doLogout(){ 
    this.app.getRootNav().setRoot(WelcomePage);
    // This function will set Welcome page as the new root. // Juhopekka Kesti(1601537)
  }
}
