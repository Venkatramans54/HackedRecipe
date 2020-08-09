import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHomepageComponent } from './recipe-homepage.component';

describe('RecipeHomepageComponent', () => {
  let component: RecipeHomepageComponent;
  let fixture: ComponentFixture<RecipeHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
