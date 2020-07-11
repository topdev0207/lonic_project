import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateNotePage } from './create-note.page';

describe('CreateNotePage', () => {
  let component: CreateNotePage;
  let fixture: ComponentFixture<CreateNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
