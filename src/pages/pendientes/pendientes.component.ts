import { Lista } from './../../models/lista.model';
import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { NavController, AlertController  } from 'ionic-angular';
import { EditListaPage } from '../edit-lista/edit-lista';

@Component({
    selector: 'page-home',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

    public listas: Lista[];

    constructor(
        public navCtrl:NavController, 
        public tareasService: TareasService,
        public alertCtrl: AlertController
        
        ) {
        this.listas = tareasService.listas;
    }

    nuevaLista() {
        const prompt = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: "Ingrese el nombre para la nueva lista",
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'titulo de la lista'
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
                    text: 'Listo',
                    handler: data => {

                        if (data.length <= 0) {
                            return;
                        }
                        
                        let lista = new Lista(data.titulo);
                        this.tareasService.agregarLista(lista);
                        this.tareasService.guardarStorage();
                        this.editarLista(lista);
                    }
                }
            ]
        });
        prompt.present();
    }

    editarLista(lista: Lista) {
        this.navCtrl.push(EditListaPage, { lista: lista });
    }
}
