/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWebCronScrapingGetAllWebScraingJobResultGet$Json } from '../fn/web-cron-scraping/api-web-cron-scraping-get-all-web-scraing-job-result-get-json';
import { ApiWebCronScrapingGetAllWebScraingJobResultGet$Json$Params } from '../fn/web-cron-scraping/api-web-cron-scraping-get-all-web-scraing-job-result-get-json';
import { apiWebCronScrapingGetAllWebScraingJobResultGet$Plain } from '../fn/web-cron-scraping/api-web-cron-scraping-get-all-web-scraing-job-result-get-plain';
import { ApiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Params } from '../fn/web-cron-scraping/api-web-cron-scraping-get-all-web-scraing-job-result-get-plain';
import { apiWebCronScrapingGetWebCronScrappingGet$Json } from '../fn/web-cron-scraping/api-web-cron-scraping-get-web-cron-scrapping-get-json';
import { ApiWebCronScrapingGetWebCronScrappingGet$Json$Params } from '../fn/web-cron-scraping/api-web-cron-scraping-get-web-cron-scrapping-get-json';
import { apiWebCronScrapingGetWebCronScrappingGet$Plain } from '../fn/web-cron-scraping/api-web-cron-scraping-get-web-cron-scrapping-get-plain';
import { ApiWebCronScrapingGetWebCronScrappingGet$Plain$Params } from '../fn/web-cron-scraping/api-web-cron-scraping-get-web-cron-scrapping-get-plain';
import { apiWebCronScrapingScheduleWebCronScrappingPost$Json } from '../fn/web-cron-scraping/api-web-cron-scraping-schedule-web-cron-scrapping-post-json';
import { ApiWebCronScrapingScheduleWebCronScrappingPost$Json$Params } from '../fn/web-cron-scraping/api-web-cron-scraping-schedule-web-cron-scrapping-post-json';
import { apiWebCronScrapingScheduleWebCronScrappingPost$Plain } from '../fn/web-cron-scraping/api-web-cron-scraping-schedule-web-cron-scrapping-post-plain';
import { ApiWebCronScrapingScheduleWebCronScrappingPost$Plain$Params } from '../fn/web-cron-scraping/api-web-cron-scraping-schedule-web-cron-scrapping-post-plain';
import { WebScrapingJobResultDto } from '../models/web-scraping-job-result-dto';
import { WebScrapingResultDto } from '../models/web-scraping-result-dto';

@Injectable({ providedIn: 'root' })
export class WebCronScrapingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWebCronScrapingGetWebCronScrappingGet()` */
  static readonly ApiWebCronScrapingGetWebCronScrappingGetPath = '/api/WebCronScraping/GetWebCronScrapping';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWebCronScrapingGetWebCronScrappingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetWebCronScrappingGet$Plain$Response(params?: ApiWebCronScrapingGetWebCronScrappingGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
    return apiWebCronScrapingGetWebCronScrappingGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWebCronScrapingGetWebCronScrappingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetWebCronScrappingGet$Plain(params?: ApiWebCronScrapingGetWebCronScrappingGet$Plain$Params, context?: HttpContext): Observable<WebScrapingResultDto> {
    return this.apiWebCronScrapingGetWebCronScrappingGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<WebScrapingResultDto>): WebScrapingResultDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWebCronScrapingGetWebCronScrappingGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetWebCronScrappingGet$Json$Response(params?: ApiWebCronScrapingGetWebCronScrappingGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
    return apiWebCronScrapingGetWebCronScrappingGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWebCronScrapingGetWebCronScrappingGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetWebCronScrappingGet$Json(params?: ApiWebCronScrapingGetWebCronScrappingGet$Json$Params, context?: HttpContext): Observable<WebScrapingResultDto> {
    return this.apiWebCronScrapingGetWebCronScrappingGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<WebScrapingResultDto>): WebScrapingResultDto => r.body)
    );
  }

  /** Path part for operation `apiWebCronScrapingGetAllWebScraingJobResultGet()` */
  static readonly ApiWebCronScrapingGetAllWebScraingJobResultGetPath = '/api/WebCronScraping/GetAllWebScraìngJobResult';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWebCronScrapingGetAllWebScraingJobResultGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Response(params?: ApiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WebScrapingJobResultDto>>> {
    return apiWebCronScrapingGetAllWebScraingJobResultGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetAllWebScraingJobResultGet$Plain(params?: ApiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Params, context?: HttpContext): Observable<Array<WebScrapingJobResultDto>> {
    return this.apiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WebScrapingJobResultDto>>): Array<WebScrapingJobResultDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWebCronScrapingGetAllWebScraingJobResultGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetAllWebScraingJobResultGet$Json$Response(params?: ApiWebCronScrapingGetAllWebScraingJobResultGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WebScrapingJobResultDto>>> {
    return apiWebCronScrapingGetAllWebScraingJobResultGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWebCronScrapingGetAllWebScraingJobResultGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWebCronScrapingGetAllWebScraingJobResultGet$Json(params?: ApiWebCronScrapingGetAllWebScraingJobResultGet$Json$Params, context?: HttpContext): Observable<Array<WebScrapingJobResultDto>> {
    return this.apiWebCronScrapingGetAllWebScraingJobResultGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WebScrapingJobResultDto>>): Array<WebScrapingJobResultDto> => r.body)
    );
  }

  /** Path part for operation `apiWebCronScrapingScheduleWebCronScrappingPost()` */
  static readonly ApiWebCronScrapingScheduleWebCronScrappingPostPath = '/api/WebCronScraping/ScheduleWebCronScrapping';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWebCronScrapingScheduleWebCronScrappingPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWebCronScrapingScheduleWebCronScrappingPost$Plain$Response(params?: ApiWebCronScrapingScheduleWebCronScrappingPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
    return apiWebCronScrapingScheduleWebCronScrappingPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWebCronScrapingScheduleWebCronScrappingPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWebCronScrapingScheduleWebCronScrappingPost$Plain(params?: ApiWebCronScrapingScheduleWebCronScrappingPost$Plain$Params, context?: HttpContext): Observable<WebScrapingResultDto> {
    return this.apiWebCronScrapingScheduleWebCronScrappingPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<WebScrapingResultDto>): WebScrapingResultDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWebCronScrapingScheduleWebCronScrappingPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWebCronScrapingScheduleWebCronScrappingPost$Json$Response(params?: ApiWebCronScrapingScheduleWebCronScrappingPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
    return apiWebCronScrapingScheduleWebCronScrappingPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWebCronScrapingScheduleWebCronScrappingPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWebCronScrapingScheduleWebCronScrappingPost$Json(params?: ApiWebCronScrapingScheduleWebCronScrappingPost$Json$Params, context?: HttpContext): Observable<WebScrapingResultDto> {
    return this.apiWebCronScrapingScheduleWebCronScrappingPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<WebScrapingResultDto>): WebScrapingResultDto => r.body)
    );
  }

}
