import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumComponent } from './shared/album/album.component';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, AlbumComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1Angular';
}
