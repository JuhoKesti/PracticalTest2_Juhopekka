import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TechPage } from '../pages/techskills/tech';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/Welcome'
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProjectPage } from '../pages/projectwork/project';
import { ActivitiesPage } from '../pages/activities/activities';
import { TeamworkPage } from '../pages/teamwork/teamwork';
import { SkillsPage } from '../pages/softskills/skills';
// Page imports // Juhopekka Kesti (1601537)

// Firebase config // Juhopekka Kesti (1601537)
const firebaseconfig = {
  apiKey: "AIzaSyBTfy4g0CepsXoBA68U_82AQ8kJ22dxsKw",
  authDomain: "labwork-8-63a9a.firebaseapp.com",
  databaseURL: "https://labwork-8-63a9a.firebaseio.com",
  projectId: "labwork-8-63a9a",
  storageBucket: "labwork-8-63a9a.appspot.com",
  messagingSenderId: "875874195988"
};

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2'; // Creating authentication
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from './../providers/firebase/firebase';


@NgModule({
  declarations: [
    MyApp,
    TechPage,
    ContactPage,
    ProfilePage,
    TabsPage,
    WelcomePage,
    Login,
    RegisterPage,
    ProjectPage,
    ActivitiesPage,
    SkillsPage,
    TeamworkPage
        
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireAuthModule,
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TechPage,
    ContactPage,
    ProfilePage,
    TabsPage,
    WelcomePage,
    Login,
    RegisterPage,
    ProjectPage,
    TeamworkPage,
    ActivitiesPage,
    SkillsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireAuthModule
  ]
})
export class AppModule {}
