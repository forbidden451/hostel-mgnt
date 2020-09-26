import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeesPaidPage } from './fees-paid.page';

describe('FeesPaidPage', () => {
  let component: FeesPaidPage;
  let fixture: ComponentFixture<FeesPaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesPaidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeesPaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
