import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeesMgntPage } from './fees-mgnt.page';

describe('FeesMgntPage', () => {
  let component: FeesMgntPage;
  let fixture: ComponentFixture<FeesMgntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesMgntPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeesMgntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
