import { Component } from '@angular/core';
import { Tabla } from '../../interfaz/tabla';
import { RecursosService } from '../../servicios/recursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-datos',
  imports: [],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})
export class TablaDatosComponent {
  tabla:Tabla[]=[];
  constructor(private recursosService: RecursosService,
    private router: Router,
  ){
    recursosService.obtenerDatosTablas().subscribe(respuesta=>
    {this.tabla= respuesta as Array<Tabla>
    console.log( respuesta as Array<Tabla>)}
    )
  }

  obtenerId(id:number){
    this.router.navigate(['detalles', id])
  }
  

}
