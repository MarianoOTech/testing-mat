export function sumaX(data: number[]): number {
    return data.reduce((suma, x) => suma + x, 0);
}
  
export function sumaYY(data: number[]): number {
    return data.reduce((suma, y) => suma + y * y, 0);
}
  
export function sumaXY(xData: number[], yData: number[]): number {
    return xData.reduce((suma, x, i) => suma + x * yData[i], 0);
}