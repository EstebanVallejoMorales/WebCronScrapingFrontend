/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WebScrapingJobResultDto } from '../../models/web-scraping-job-result-dto';

export interface ApiWebCronScrapingGetAllWebScraingJobResultGet$Json$Params {
}

export function apiWebCronScrapingGetAllWebScraingJobResultGet$Json(http: HttpClient, rootUrl: string, params?: ApiWebCronScrapingGetAllWebScraingJobResultGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WebScrapingJobResultDto>>> {
  const rb = new RequestBuilder(rootUrl, apiWebCronScrapingGetAllWebScraingJobResultGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<WebScrapingJobResultDto>>;
    })
  );
}

apiWebCronScrapingGetAllWebScraingJobResultGet$Json.PATH = '/api/WebCronScraping/GetAllWebScraìngJobResult';
