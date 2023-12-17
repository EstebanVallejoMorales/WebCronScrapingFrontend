/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getWeatherForecast$Json } from '../fn/weather-forecast/get-weather-forecast-json';
import { GetWeatherForecast$Json$Params } from '../fn/weather-forecast/get-weather-forecast-json';
import { getWeatherForecast$Plain } from '../fn/weather-forecast/get-weather-forecast-plain';
import { GetWeatherForecast$Plain$Params } from '../fn/weather-forecast/get-weather-forecast-plain';
import { WeatherForecast } from '../models/weather-forecast';

@Injectable({ providedIn: 'root' })
export class WeatherForecastService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getWeatherForecast()` */
  static readonly GetWeatherForecastPath = '/WeatherForecast';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeatherForecast$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecast$Plain$Response(params?: GetWeatherForecast$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    return getWeatherForecast$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeatherForecast$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecast$Plain(params?: GetWeatherForecast$Plain$Params, context?: HttpContext): Observable<Array<WeatherForecast>> {
    return this.getWeatherForecast$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeatherForecast$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecast$Json$Response(params?: GetWeatherForecast$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    return getWeatherForecast$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeatherForecast$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecast$Json(params?: GetWeatherForecast$Json$Params, context?: HttpContext): Observable<Array<WeatherForecast>> {
    return this.getWeatherForecast$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

}
