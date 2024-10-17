import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [],
  templateUrl: './stddev.component.html',
  styleUrl: './stddev.component.css'
})
export class StddevComponent {

  stddev1: number | null = null;
  stddev2: number | null = null;

  constructor(private mediaComponent: MediaComponent) {}

  calcularStddev(): void {
    // Listas de números para calcular
    const numbers1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    const numbers2 = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

    const media1 = this.mediaComponent.calcularMedia(numbers1);
    this.stddev1 = this.calcularDesviacion(numbers1, media1);

    const media2 = this.mediaComponent.calcularMedia(numbers2);
    this.stddev2 = this.calcularDesviacion(numbers2, media2);
  }

  private calcularDesviacion(numbers: number[], media: number): number {
    const variance = numbers.reduce((acc, curr) => acc + Math.pow(curr - media, 2), 0) / numbers.length;
    return parseFloat(Math.sqrt(variance).toFixed(2));
  }

}

