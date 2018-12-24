import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Lista } from '../../models/lista.model';
import { EditListaPage } from '../edit-lista/edit-lista';

@Component({
    selector: 'terminados-page',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage {
    public listas: Lista[];

    constructor(
        public tareasService: TareasService,
        public navCtrl: NavController
       

    ) {
        this.listas = tareasService.listas;
    }

    editarLista(lista: Lista) {
        this.navCtrl.push(EditListaPage, { lista: lista });
    }

    eliminarLista(lista: Lista) {
        this.tareasService.eliminarLista(lista);
    }
}
