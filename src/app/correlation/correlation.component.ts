import { Component } from '@angular/core';
import { sumaXoY, sumaXXoYY, sumaXY } from '../common/calculate';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {
  r: number = 0;

  // calcular la correlaciion
  calcularCorrelation(array1: number[], array2: number[]): void {
    const n = array1.length;

    const sumXValues = sumaXoY(array1);
    const sumYValues = sumaXoY(array2);
    const sumXYValues = sumaXY(array1, array2);
    const sumXXValues = sumaXXoYY(array1);
    const sumYYValues = sumaXXoYY(array2);

    const numerator = n * sumXYValues - sumXValues * sumYValues;
    const denominator = Math.sqrt((n * sumXXValues - sumXValues * sumXValues) * (n * sumYYValues - sumYValues * sumYValues));

    if (denominator !== 0) {
      this.r = numerator / denominator;
    }
  }

  getRXY(array1: number[], array2: number[]): number {
    this.calcularCorrelation(array1, array2);
    return parseFloat(this.r.toFixed(5)); 
  }

  //obtener r^2
  getRR(array1: number[], array2: number[]): number {
    const r = this.getRXY(array1, array2);
    return parseFloat((r * r).toFixed(5)); 
  }
}