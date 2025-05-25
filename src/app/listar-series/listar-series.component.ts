import { Component, Output, EventEmitter} from '@angular/core';
import { ServiceMainService } from '../services/service-main.service';
import { Serie } from '../../models/series.model';

@Component({
  selector: 'app-listar-series',
  imports: [],
  templateUrl: './listar-series.component.html',
  styleUrl: './listar-series.component.css'
})

export class ListarSeriesComponent {
  series: Serie[] = [];
  @Output() seriesCargadas = new EventEmitter<Serie[]>();

  constructor(public serviceSeries: ServiceMainService) {
    this.serviceSeries.getSeries().subscribe((data: any) => {
      this.series = data.map((item: any) => {
        return new Serie(
          item.id,
          item.name,
          item.channel,
          item.seasons,
          item.description,
          item.webpage,
          item.poster
        );
      });
      this.seriesCargadas.emit(this.series);
    });
  }

   promedioTemporadas(): number {
    if (this.series.length === 0) return 0;
    const totalTemporadas = this.series.reduce((suma, serie) => suma + serie.seasons, 0);
    return totalTemporadas / this.series.length;
  }
}
