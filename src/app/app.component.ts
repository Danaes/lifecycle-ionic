import { AjustesProvider } from './../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroduccionPage } from '../pages/introduccion/introduccion';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _ajustes: AjustesProvider) {
    platform.ready().then(() => {

      this._ajustes.loadStorage()
            .then( () => {
              this.rootPage = ( this._ajustes.ajustes.showTutorial ) ? IntroduccionPage : HomePage;

              this.platform.pause.subscribe(() => {
                console.warn("La app se detendrá");
              });

              this.platform.resume.subscribe(() => {
                console.warn("La app va a continuar");
              });

              statusBar.styleDefault();
              splashScreen.hide();
            });
    });
  }
}

