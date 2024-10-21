import { Component } from '@angular/core';
import { sumaXoY, sumaXXoYY, sumaXY } from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {
  b0: number = 0;
  b1: number = 0;
  r: number = 0;

  calculateRegression(proxySize: number[], actualAdded: number[]): void {
    const n = proxySize.length;
    if (n === 0) { return; }

    const sumXValues = sumaXoY(proxySize);
    const sumYValues = sumaXoY(actualAdded);
    const sumXYValues = sumaXY(proxySize, actualAdded);
    const sumXXValues = sumaXXoYY(proxySize);
    const sumYYValues = sumaXXoYY(actualAdded);

    this.b1 = (n * sumXYValues - sumXValues * sumYValues) / (n * sumXXValues - sumXValues * sumXValues);
    this.b0 = (sumYValues - this.b1 * sumXValues) / n;

    const numerator = n * sumXYValues - sumXValues * sumYValues;
    const denominator = Math.sqrt((n * sumXXValues - sumXValues * sumXValues) * (n * sumYYValues - sumYValues * sumYValues));
    this.r = numerator / denominator;
  }

  predict(estimatedProxySize: number): number {
    return this.b0 + this.b1 * estimatedProxySize;
  }
}