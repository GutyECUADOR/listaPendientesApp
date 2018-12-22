import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Lista } from "../../models/lista.model";
import { NavController, AlertController  } from 'ionic-angular';
import { NuevaListaPage } from '../nueva-lista/nueva-lista';


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
                        
                        this.navCtrl.push(NuevaListaPage, {
                            titulo: data.titulo,
                            isNueva: true
                        });
                    }
                }
            ]
        });
        prompt.present();
    }

}
