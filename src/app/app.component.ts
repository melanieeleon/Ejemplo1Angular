import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumComponent } from './shared/album/album.component';
import { CardComponent } from './shared/card/card.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from "./shared/menu/menu.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, AlbumComponent, CardComponent, FooterComponent, HttpClientModule, MenuComponent],
  providers:[RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1Angular';
  constructor(private recursosService: RecursosService){}
  }

