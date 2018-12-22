export class Lista {
    public id: number;
    public titulo: string;
    public fechaINI: Date;
    public fechaFIN: Date;
    public items: ListaItem[];
    public isComplete: boolean;

    constructor(titulo) {
        this.titulo = titulo;
        this.id = new Date().getSeconds();
        this.fechaINI = new Date();
        this.items = [];
        this.isComplete = false;
        
     }
}


export class ListaItem {
    public detalle: string;
    public isComplete: boolean;

    constructor(detalle: string) {
        this.detalle = detalle;
        this.isComplete = false;
    }
}

