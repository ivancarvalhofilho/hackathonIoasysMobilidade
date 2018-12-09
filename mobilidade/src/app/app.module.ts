import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeEstabPage } from '../pages/home-estab/home-estab';
import { CriarRotaPage } from '../pages/criar-rota/criar-rota';
// import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeEstabPage,
    HomePage,
    CriarRotaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp({
          apiKey: "jmFSdi5B5yzs5atxyd98GCSMilDk0GkBMApYNQkh",
          authDomain: "movimenta-4ede5.firebaseapp.com",
          databaseURL: "https://movimenta-4ede5.firebaseio.com",
          projectId: "movimenta-4ede5",
          storageBucket: "movimenta-4ede5.appspot.com",     
          messagingSenderId: "1078883010226"
      }),
    //   FirebaseAuthentication,
       AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeEstabPage,
    LoginPage,
    CriarRotaPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
