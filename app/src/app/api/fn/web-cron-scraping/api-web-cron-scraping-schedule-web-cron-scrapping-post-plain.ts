/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WebScrapingResultDto } from '../../models/web-scraping-result-dto';
import { WebScrapingScheduleRequestDto } from '../../models/web-scraping-schedule-request-dto';

export interface ApiWebCronScrapingScheduleWebCronScrappingPost$Plain$Params {
      body?: WebScrapingScheduleRequestDto
}

export function apiWebCronScrapingScheduleWebCronScrappingPost$Plain(http: HttpClient, rootUrl: string, params?: ApiWebCronScrapingScheduleWebCronScrappingPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
  const rb = new RequestBuilder(rootUrl, apiWebCronScrapingScheduleWebCronScrappingPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WebScrapingResultDto>;
    })
  );
}

apiWebCronScrapingScheduleWebCronScrappingPost$Plain.PATH = '/api/WebCronScraping/ScheduleWebCronScrapping';
