import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models/lista.model';

/**
 * Generated class for the ListasCompletadasPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'listasCompletadasPipe',
  pure : false // Determina si se ejecuta con el ciclo de actualizacion de angular
})
export class ListasCompletadasPipe implements PipeTransform {
  /**
   * Comprueba que el grupo de listas recibidas poseean el atributo completado en false.
   */
  transform(listas: Lista[], isCompletado) {
    return listas.filter( lista => {
      return lista.isComplete == isCompletado;
    });
  }
}
