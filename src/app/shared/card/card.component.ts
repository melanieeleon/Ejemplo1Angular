import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  fotos: Foto[] = [];
  cards = Array(9).fill(0);
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta=> {
      this.fotos = respuesta as Array<Foto>
    })
  }

}
