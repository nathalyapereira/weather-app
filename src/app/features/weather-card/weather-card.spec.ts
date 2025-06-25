import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCard } from './weather-card';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('WeatherCard', () => {
  let component: WeatherCard;
  let fixture: ComponentFixture<WeatherCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCard, CommonModule, FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
