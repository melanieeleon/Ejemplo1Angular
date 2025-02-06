import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  topic:String="Album Ejemplo"
  content:String="A continuacion se mostrara una serie de ejemplos usando componentes para este ejemplo de album se utilizo un componente y para las cartas otro componente"

}
