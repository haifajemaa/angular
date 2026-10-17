import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaComment } from './pizza-comment';

describe('PizzaComment', () => {
  let component: PizzaComment;
  let fixture: ComponentFixture<PizzaComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaComment],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaComment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
