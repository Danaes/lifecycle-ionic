import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



@Injectable()
export class AjustesProvider {

  ajustes = {
    showTutorial: true
  }

  constructor(private storage: Storage,
              private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  loadStorage(){

    return new Promise( (resolve, reject) => {
      
      if( this.platform.is("cordova") ){ //Device
        console.warn("Init storage");
        this.storage.ready()
              .then( () => {
                console.warn("storage ready");
                
                this.storage.get("ajustes")
                      .then( ajustes => {

                        if( ajustes )
                          this.ajustes = ajustes;
                        
                        resolve();
                      });
              });

      } else { //Desktop
        
        if( localStorage.getItem("ajustes") )
          this.ajustes = JSON.parse( localStorage.getItem("ajustes") );

        resolve();
  
      }

    });

  }

  saveStorage(){

    if( this.platform.is("cordova") ){ //Device
      
      this.storage.ready().then( () => this.storage.set("ajustes", this.ajustes));

    } else { //Desktop
      
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes) );

    }

  }

}
