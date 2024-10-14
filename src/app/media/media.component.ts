import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  calcularMedia(lista: number[]) {
    let sumaA = 0;
    lista.forEach(numero => {
      sumaA += numero;  
    });
  
    return parseFloat((sumaA / lista.length).toFixed(2));
  }
}