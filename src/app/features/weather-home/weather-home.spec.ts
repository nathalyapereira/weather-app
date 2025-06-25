import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHome } from './weather-home';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCard } from '../weather-card/weather-card';
import { CommonModule } from '@angular/common';

describe('WeatherHome', () => {
  let component: WeatherHome;
  let fixture: ComponentFixture<WeatherHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherHome,
        FormsModule,
        FontAwesomeModule,
        WeatherCard,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
