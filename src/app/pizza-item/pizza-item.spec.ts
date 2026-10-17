import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaItem } from './pizza-item';

describe('PizzaItem', () => {
  let component: PizzaItem;
  let fixture: ComponentFixture<PizzaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
