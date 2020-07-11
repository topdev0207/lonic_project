import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostPagePage } from './post-page.page';

describe('PostPagePage', () => {
  let component: PostPagePage;
  let fixture: ComponentFixture<PostPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
