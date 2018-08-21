import { Component } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  page3 = Pagina3Page;

  constructor(private alertCtrl: AlertController, 
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }
  
  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }
  
  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }
  
  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }
  
  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }
  
  ionViewCanEnter(){
    console.log("ionViewCanEnter");
    return new Promise( (resolve, reject) => {

      const confirm = this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Está seguro que desea entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Aceptar',
            handler: () => resolve(true)
          }
        ]
      });
      confirm.present();

    });
    
  }
  
  ionViewCanLeave(){

    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 3000
    });

    loader.present();

    return new Promise((resolve, reject) => {
      
      setTimeout(()=> {
        loader.dismiss();
        resolve(true);
      }, 1500);

    });
  }

}
