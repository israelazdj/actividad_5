import { Component, Input } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() noticias:Inoticias[]=[]
  


  constructor(){
    this.cargandonoticias()
  }

  cargandonoticias(){
    let html = ""
    this.noticias.forEach((noticia:Inoticias)=>{
      html += `<article class="noticia">
                <h3>${noticia.titulo}</h3>
                <figure class="figure">
                  <img class="image" src="${noticia.imagen}" alt="">
                </figure>                
                <p>${noticia.texto}</p>
                <p>${noticia.fecha}</p>
              </article>`
    })
    return html;
  }


}
