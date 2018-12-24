import { NavController, AlertController } from 'ionic-angular';
import { TareasService } from './../../services/tareas.service';
import { Component, Input } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { EditListaPage } from '../../pages/edit-lista/edit-lista';
import { ItemSliding } from 'ionic-angular';

/**
 * Generated class for the ListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-lista',
  templateUrl: 'lista.html'
})
export class ListaComponent {

  @Input() listasTerminadas: boolean;
  
  constructor(public tareasService:TareasService, 
              private navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  editarLista(lista: Lista, ) {
    this.navCtrl.push(EditListaPage, { lista: lista });
  }

  eliminarLista(lista: Lista) {
    this.tareasService.eliminarLista(lista);
  }

  editarNombreLista(listaRecibida: Lista, slidingItem: ItemSliding){
    
    slidingItem.close();

    const prompt = this.alertCtrl.create({
      title: 'Editar Nombre',
      message: "Ingrese el nombre para la lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'titulo de la lista',
          value: listaRecibida.titulo
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {

            if (data.length <= 0) {
              return;
            }

            
            listaRecibida.titulo = data.titulo;
            this.tareasService.guardarStorage();
            
          }
        }
      ]
    });
    prompt.present();
  }

}
