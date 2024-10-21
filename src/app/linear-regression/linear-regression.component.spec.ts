import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionComponent } from './linear-regression.component';


describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearRegressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return b0 approximately -22.55 with the dataset Data_Test1', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b0).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with the dataset Data_Test1', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b1).toBeCloseTo(1.7279, 2);
  });

  it('Should return yk approximately 644.429 with the dataset Data_Test1 if x=386', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    const result = component.predict(386);
    expect(result).toBeCloseTo(644.429, 2);
  });

  it('Should return b0 approximately -4.039 with the dataset Data_Test4', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b0).toBeCloseTo(-4.039, 2);
  });

  it('Should return b0 approximately -22.55 with the dataset Data_Test1', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b0).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with the dataset Data_Test1', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b1).toBeCloseTo(1.7279, 2);
  });

  it('Should return yk approximately 644.429 with the dataset Data_Test1 if x=386', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    const result = component.predict(386);
    expect(result).toBeCloseTo(644.429, 2);
  });

  it('Should return b0 approximately -4.039 with the dataset Data_Test4', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b0).toBeCloseTo(-4.039, 2);
  });

  it('Should return b1 approximately 0.1681 with the dataset Data_Test4', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b1).toBeCloseTo(0.1681, 2);
  });

  it('Should return yk approximately 60.858 with the dataset Data_Test4 if x=386', () => {
    const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    const result = component.predict(386);
    expect(result).toBeCloseTo(60.858, 2);
  });

  it('Should return b0 approximately -23.92 with the dataset Data_Test3', () => {
    const proxySize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b0).toBeCloseTo(-23.92, 2);
  });

  it('Should return b1 approximately 1.43097 with the dataset Data_Test3', () => {
    const proxySize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b1).toBeCloseTo(1.43097, 2);
  });

  it('Should return yk approximately 528.4294 with the dataset Data_Test3 if x=386', () => {
    const proxySize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
    const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    component.calculateRegression(proxySize, actualAdded);
    const result = component.predict(386);
    expect(result).toBeCloseTo(528.4294, 2);
  });

  it('Should return b0 approximately -4.604 with the dataset Data_Test4', () => {
    const proxySize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b0).toBeCloseTo(-4.604, 2);
  });

  it('Should return b1 approximately 0.140164 with the dataset Data_Test4', () => {
    const proxySize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    expect(component.b1).toBeCloseTo(0.140164, 2);
  });

  it('Should return yk approximately 49.4994 with the dataset Data_Test4 if x=386', () => {
    const proxySize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
    const actualAdded = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    component.calculateRegression(proxySize, actualAdded);
    const result = component.predict(386);
    expect(result).toBeCloseTo(49.4994, 2);
  });

  it('should return early if proxySize array is empty', () => {
    const emptyProxySize: number[] = [];
    const emptyActualAdded: number[] = [];
  
    component.calculateRegression(emptyProxySize, emptyActualAdded);
    expect(component.b0).toBe(0); 
    expect(component.b1).toBe(0); 
    expect(component.r).toBe(0); 
  });
});
