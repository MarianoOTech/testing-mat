import { Component } from '@angular/core';
import { sumaX, sumaYY, sumaXY } from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {
  proxySize: number[] = [];
  actualAdded: number[] = [];

  // Resultados de la regresión
  b0: number = 0;
  b1: number = 0;
  r: number = 0;

  // Función para cargar los datos desde el archivo JSON
  loadData(): void {
    fetch('assets/data_Test1.json')
      .then(response => response.json())
      .then(data => {
        this.proxySize = data.proxy_size;
        this.actualAdded = data.actual_added;
        this.calculateRegression();
      })
      .catch(error => console.error('Error reading JSON file:', error));
  }

  // Función para calcular los parámetros de la regresión lineal
  calculateRegression(): void {
    const n = this.proxySize.length;
    if (n === 0) {
      return;
    }
    // Sumas necesarias para el cálculo de regresión lineal
    const sumXValues = sumaX(this.proxySize);
    const sumYValues = sumaX(this.actualAdded); // Reutilizamos sumX para sumar los valores de actualAdded
    const sumXYValues = sumaXY(this.proxySize, this.actualAdded);
    const sumXXValues = sumaYY(this.proxySize); // Suma de los cuadrados de X
    const sumYYValues = sumaYY(this.actualAdded); // Suma de los cuadrados de Y

    // Cálculo de los parámetros de regresión lineal
    this.b1 = (n * sumXYValues - sumXValues * sumYValues) / (n * sumXXValues - sumXValues * sumXValues);
    this.b0 = (sumYValues - this.b1 * sumXValues) / n;

    // Cálculo del coeficiente de correlación
    const numerator = n * sumXYValues - sumXValues * sumYValues;
    const denominator = Math.sqrt((n * sumXXValues - sumXValues * sumXValues) * (n * sumYYValues - sumYValues * sumYValues));
    this.r = numerator / denominator;
  }

  // Función para realizar una predicción con el modelo de regresión
  predict(estimatedProxySize: number): number {
    return this.b0 + this.b1
  }
}
