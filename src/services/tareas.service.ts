import { Injectable } from '@angular/core';
import { Lista, ListaItem } from "../models/lista.model";

@Injectable()
export class TareasService {

    public listas: Lista[] = [];

    constructor(){
        const lista1 = new Lista('hacer las compras');
        const lista2 = new Lista('hacer las compras 2');
        this.listas.push(lista1, lista2);

        console.log(this.listas);
    }

    
}