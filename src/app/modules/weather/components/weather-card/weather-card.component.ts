import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WheaterDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
  ngOnInit(): void {
    console.log('Dados recebidos do pai - Weather-card' , this.weatherDatasInput)
  }
  @Input() weatherDatasInput!: WeatherDatas;
}
