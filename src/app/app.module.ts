import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// Importing pages
import { HomePage } from '../pages/home/home';
 
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCXzNlMkymIh-OnS_d9IjDp-q6B7OZFiC0",
    authDomain: "songtest-e3b64.firebaseapp.com",
    databaseURL: "https://songtest-e3b64.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "125694087590"
};
 
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
  ]
})
export class AppModule {}