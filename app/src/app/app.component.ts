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
  
  public url1: string = '';
  public cron1: string = '';
  public url2: string = '';
  public cron2: string = '';

  public webScrapingResultDto1: WebScrapingResultDto;
  public webScrapingResultDto2: WebScrapingResultDto;
  public webScrapingScheduleRequestDto: WebScrapingScheduleRequestDto

  public constructor(private api:WebCronScrapingService){
    this.webScrapingResultDto1 = {};
    this.webScrapingResultDto2 = {};
    this.webScrapingScheduleRequestDto = {};    
  }

  schedule() {
    // Verifica que ambos campos no estén vacíos antes de hacer la llamada al servicio
    if (this.url1.trim() === '' || this.cron1.trim() === '') {
      // Manejar el caso en el que los campos estén vacíos
      console.error('URL y Cron son campos requeridos.');
      return;
    }
    else{
      this.webScrapingScheduleRequestDto = {
        url: this.url1,
        cron: this.cron1
      };
      this.api.apiWebCronScrapingScheduleWebCronScrappingPost$Json({body: this.webScrapingScheduleRequestDto}).subscribe(
        response => {
          this.webScrapingResultDto1 = response;
        }      
      )    
    }  
  }

  execute() {
    // Verifica que ambos campos no estén vacíos antes de hacer la llamada al servicio
    if (this.url2.trim() === '') {
      // Manejar el caso en el que los campos estén vacíos
      alert('URL es un campo requerido.');
      return;
    }
    else{
      
      this.api.apiWebCronScrapingGetWebCronScrappingGet$Json({url: this.url2}).subscribe(
        response => {
          this.webScrapingResultDto2 = response;
        }      
      )    
    }  
  }

}
