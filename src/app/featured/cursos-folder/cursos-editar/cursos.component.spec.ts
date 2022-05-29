import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCursoDialogComponent } from '../cursos-editar/cursos.component'


describe('EditarCursoDialogComponent', () => {
  let component: EditarCursoDialogComponent;
  let fixture: ComponentFixture<EditarCursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
