import { Component } from '@angular/core';
import { NavParams, AlertController, NavController  } from "ionic-angular";
import { TareasService } from '../../services/tareas.service';
import { Lista, ListaItem } from '../../models/lista.model';
import { PendientesPage } from '../pendientes/pendientes.component';



@Component({
  selector: 'edit-lista',
  templateUrl: 'edit-lista.html',
})
export class EditListaPage {

  public lista: Lista;
  public descItem: string;

  constructor(public navParams: NavParams, 
              public tareasService: TareasService, 
              public alertCtrl: AlertController,
              public navCtrl: NavController  ) {
    this.descItem = '';
    const lista = navParams.get('lista');
    this.lista = lista;
    console.log(this.lista);

  }

  agregarItem(){
    if (this.descItem.length > 0) {
      let item = new ListaItem( this.descItem );
      this.lista.items.push(item);
      this.tareasService.guardarStorage();
      this.descItem = '';
    }
    
  }

  actualizarEstadoItem(listaItem: ListaItem){
    listaItem.isComplete = !listaItem.isComplete;

    const itemsIncompletos = this.lista.items.filter( item => item.isComplete == false);
    console.log('incompletos: ' + itemsIncompletos.length);
    if (itemsIncompletos.length == 0) {
      
      this.lista.isComplete = true;
      this.lista.fechaFIN = new Date();
      this.showAlert();
      this.navCtrl.push(PendientesPage);
    }else{
      this.lista.isComplete = false;
      this.lista.fechaFIN = null;
    }

    this.tareasService.guardarStorage();
  }

  eliminarItemLista(index: number){
    this.lista.items.splice(index,1);
    this.tareasService.guardarStorage();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Lista Terminada!',
      subTitle: 'Felicidades, has completado todo, la lista pasara al grupo de terminadas!',
      buttons: ['OK']
    });
    alert.present();
  }
    
}
