/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WebScrapingResultDto } from '../../models/web-scraping-result-dto';
import { WebScrapingScheduleRequestDto } from '../../models/web-scraping-schedule-request-dto';

export interface ApiWebCronScrapingScheduleWebCronScrappingPost$Json$Params {
      body?: WebScrapingScheduleRequestDto
}

export function apiWebCronScrapingScheduleWebCronScrappingPost$Json(http: HttpClient, rootUrl: string, params?: ApiWebCronScrapingScheduleWebCronScrappingPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
  const rb = new RequestBuilder(rootUrl, apiWebCronScrapingScheduleWebCronScrappingPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WebScrapingResultDto>;
    })
  );
}

apiWebCronScrapingScheduleWebCronScrappingPost$Json.PATH = '/api/WebCronScraping/ScheduleWebCronScrapping';
