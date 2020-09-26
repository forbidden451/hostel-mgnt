import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeesDuePage } from './fees-due.page';

describe('FeesDuePage', () => {
  let component: FeesDuePage;
  let fixture: ComponentFixture<FeesDuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesDuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeesDuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
