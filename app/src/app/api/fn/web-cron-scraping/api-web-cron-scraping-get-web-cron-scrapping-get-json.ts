/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WebScrapingResultDto } from '../../models/web-scraping-result-dto';

export interface ApiWebCronScrapingGetWebCronScrappingGet$Json$Params {
  url?: string;
}

export function apiWebCronScrapingGetWebCronScrappingGet$Json(http: HttpClient, rootUrl: string, params?: ApiWebCronScrapingGetWebCronScrappingGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<WebScrapingResultDto>> {
  const rb = new RequestBuilder(rootUrl, apiWebCronScrapingGetWebCronScrappingGet$Json.PATH, 'get');
  if (params) {
    rb.query('url', params.url, {});
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

apiWebCronScrapingGetWebCronScrappingGet$Json.PATH = '/api/WebCronScraping/GetWebCronScrapping';
