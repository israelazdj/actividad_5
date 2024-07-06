import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { Inoticias } from './interfaces/inoticias.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  arraynoticias: Inoticias[]=[
    {titulo:'accidente', 
      imagen:'https://www.derco.cl/comunicaciones/accidente-de-transito',
      texto:'El club está de acuerdo en aceptar el denominado como "Stadium Agreemen" si la FIFA soluciona lo que piden otros cuatro clubes',
      fecha:'28-06-2024'},
        {titulo:'accidente',
         imagen:'https://www.derco.cl/comunicaciones/accidente-de-transito',
         texto:'El club está de acuerdo en aceptar el denominado como "Stadium Agreemen" si la FIFA soluciona lo que piden otros cuatro clubes',
         fecha:'28-06-2024'}
  ];
}
