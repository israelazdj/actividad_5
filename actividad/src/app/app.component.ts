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
    {titulo:'Brusco cambio de tiempo este fin de semana', 
      imagen:'https://image.ondacero.es/clipping/cmsimages01/2024/07/05/C8B74744-7AD0-4040-990E-6F1AB4B0E1C7/varios-turistas-protegen-lluvia-este-lunes-inmediaciones-casa-batllo-paseo-gracia-barcelona_95.jpg?crop=1080,607,x0,y113&width=1028&height=578&optimize=high&format=webply',
      texto:'Bajada radical de temperaturas y tormentas con granizo en estas zonas',
      fecha:'06.07.2024'},
        {titulo:'El Gobierno no negocia el reparto de menores y aleja el pacto con el PP',
         imagen:'https://phantom-elmundo.unidadeditorial.es/c44d23a22d957c68b11f9824b3213665/resize/460/f/webp/assets/multimedia/imagenes/2024/07/05/17202090418119.jpg',
         texto:'«El Gobierno ni siquiera nos llama». «Sólo hemos recibido un correo». «Falta una acción del Gobierno antes de sentarnos».',
         fecha:'06-06-2024'}
  ];
}
