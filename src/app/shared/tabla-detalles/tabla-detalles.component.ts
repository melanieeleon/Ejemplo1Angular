import { Component } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Tabla } from '../../interfaz/tabla';

@Component({
  selector: 'app-tabla-detalles',
  imports: [RouterLink],
  templateUrl: './tabla-detalles.component.html',
  styleUrl: './tabla-detalles.component.css'
})
export class TablaDetallesComponent {
  id:number = 0;

  post: Tabla | undefined;

  constructor(
    private service: RecursosService,
    private router: ActivatedRoute
  ) {
    
    this.router.paramMap.subscribe(params => {
      const paramId = params.get('id');
      this.id = paramId ? +paramId : 0; // Convierte el valor a número, si existe, sino asigna 0
      console.log(this.id); // Mostrar el id procesado
    });

    this.service.obtenerDetallePosts(this.id).subscribe(details =>{
        this.post = details as Tabla;
    })

  }

}
