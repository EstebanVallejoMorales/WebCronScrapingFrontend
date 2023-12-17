/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WebScrapingJobResultDto } from '../../models/web-scraping-job-result-dto';

export interface ApiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Params {
}

export function apiWebCronScrapingGetAllWebScraingJobResultGet$Plain(http: HttpClient, rootUrl: string, params?: ApiWebCronScrapingGetAllWebScraingJobResultGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WebScrapingJobResultDto>>> {
  const rb = new RequestBuilder(rootUrl, apiWebCronScrapingGetAllWebScraingJobResultGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<WebScrapingJobResultDto>>;
    })
  );
}

apiWebCronScrapingGetAllWebScraingJobResultGet$Plain.PATH = '/api/WebCronScraping/GetAllWebScraìngJobResult';
