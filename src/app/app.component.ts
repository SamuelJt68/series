import { Component } from '@angular/core';
import { ListarSeriesComponent } from './listar-series/listar-series.component';
import { Serie } from '../models/series.model';

@Component({
  selector: 'app-root',
  imports: [ListarSeriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  lista_series : Serie[] = [];
  description: string = '';
  firstInit: boolean = true;
  title: string = '';
  srcimg: string = '';

  recibirSeries(series: Serie[]) {
    this.lista_series = series;
    console.log('Series recibidas:', series);
  }

  toggleDescription(index: number) {
    this.description = this.lista_series[index-1].description;
    this.firstInit = false;
    this.title = this.lista_series[index-1].name;
    this.srcimg = this.lista_series[index-1].poster;
  }


}
