import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ABMDeAlumnosComponent } from './abm-de-alumnos.component';


describe('ABMDeAlumnosComponent', () => {
  let component: ABMDeAlumnosComponent;
  let fixture: ComponentFixture<ABMDeAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMDeAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMDeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
