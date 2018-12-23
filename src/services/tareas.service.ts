import { Injectable } from '@angular/core';
import { Lista } from "../models/lista.model";

@Injectable()
export class TareasService {

    public listas: Lista[] = [];

    constructor(){
        this.cargarStorage();
        /* const lista1 = new Lista('hacer las compras');
        const lista2 = new Lista('hacer las compras 2');
        this.listas.push(lista1, lista2);

        console.log(this.listas); */
    }
    
    agregarLista(lista: Lista) {
        this.listas.push(lista);
    }

    eliminarLista(listaRecibida: Lista) {
        const listasActializadas = this.listas.filter(listaActual => listaActual.id != listaRecibida.id );
        this.listas = listasActializadas;
        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('storageListas', JSON.stringify(this.listas));
    }

    cargarStorage(){
        
        if (localStorage.getItem('storageListas')) {
            this.listas = JSON.parse(localStorage.getItem('storageListas'))
        }
    }

    
}