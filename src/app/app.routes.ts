import { Routes } from '@angular/router';
import { TablaDatosComponent } from './shared/tabla-datos/tabla-datos.component';
import { CardComponent } from './shared/card/card.component';
import { TablaDetallesComponent } from './shared/tabla-detalles/tabla-detalles.component';

export const routes: Routes = [
    {path:'posts', component:TablaDatosComponent},
    {path:'cards', component:CardComponent},
    {path:'detalles/:id', component:TablaDetallesComponent}
];
