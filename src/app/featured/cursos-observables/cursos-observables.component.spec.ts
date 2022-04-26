import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosObservablesComponent } from './cursos-observables.component';


describe('CursosObservablesComponent', () => {

  let component: CursosObservablesComponent;
  let fixture: ComponentFixture<CursosObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
