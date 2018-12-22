import { Component } from '@angular/core';
import { NavParams  } from "ionic-angular";
import { TareasService } from '../../services/tareas.service';
import { Lista, ListaItem } from '../../models/lista.model';


@Component({
  selector: 'nueva-lista',
  templateUrl: 'nueva-lista.html',
})
export class NuevaListaPage {

  public lista: Lista;
  public descItem: string;

  constructor(public navParams: NavParams, public tareasService: TareasService ) {
    let titulo = navParams.get('titulo');
    console.log(titulo);
    this.lista = new Lista(titulo);

  }

  agregarLista(){
    if (this.descItem.length > 0) {
      let item = new ListaItem( this.descItem );
      this.lista.items.push(item);
    }
  }

  actualizarEstadoItem(listaItem: ListaItem){
    listaItem.isComplete = !listaItem.isComplete;
  }

    
}
