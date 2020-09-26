import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayFeesPage } from './pay-fees.page';

describe('PayFeesPage', () => {
  let component: PayFeesPage;
  let fixture: ComponentFixture<PayFeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFeesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
