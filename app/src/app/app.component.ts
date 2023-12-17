import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WebCronScrapingService } from './api/services';
import { WebScrapingScheduleRequestDto } from './api/models';
import { WebScrapingResultDto } from './api/models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  
  public url: string = '';
  public cron: string = '';

  // public webScrapingResultDto: WebScrapingResultDto;
  // public webScrapingScheduleRequestDto: WebScrapingScheduleRequestDto

  public constructor(private api:WebCronScrapingService){
    // this.webScrapingResultDto = {};
    // this.webScrapingScheduleRequestDto = {
    //   url: 'https://listado.mercadolibre.com.co/cervezas#D[A:cervezas]',
    //   cron: '0 0/1 0 ? * * *'
    // };
    

    // this.api.apiWebCronScrapingScheduleWebCronScrappingPost$Json({body: this.webScrapingScheduleRequestDto}).subscribe(
    //   response => {
    //     this.webScrapingResultDto = response;
    //   }      
    // )    
  }

  schedule() {
    // Verifica que ambos campos no estén vacíos antes de hacer la llamada al servicio
    if (this.url.trim() === '' || this.cron.trim() === '') {
      // Manejar el caso en el que los campos estén vacíos
      console.error('URL y Cron son campos requeridos.');
      return;
    }
  }
}
