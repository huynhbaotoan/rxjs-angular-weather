import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [WeatherService]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

//   it('should return an Observable<Weather[]>', () => {
//     const service: WeatherService = TestBed.get(WeatherService);
//     expect(service.getWeather()).toBeTruthy();
//   });

//   it('should return an Observable<Weather[]>', () => {
//     const service: WeatherService = TestBed.get(WeatherService);
//     expect(service.getWeather()).toBeTruthy();
//   });

//   it('should return an Observable<Weather[]>', () => {
//     const service: WeatherService = TestBed.get(WeatherService);
//     expect(service.getWeather()).toBeTruthy();
//   });

//   it('should return an Observable<Weather[]>', () => {
//     const service: WeatherService = TestBed.get(WeatherService);
//     expect(service.getWeather()).toBeTruthy();
//   });
});