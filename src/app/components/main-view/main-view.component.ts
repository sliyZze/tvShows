import { Component } from '@angular/core';
import {ShowListComponent} from '../show-list/show-list.component';
import {DataServiceService} from '../../services/data.service.service';
import {Show} from '../../model/show';

@Component({
  selector: 'app-main-view',
  imports: [
    ShowListComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  constructor(private showDataService:  DataServiceService){
  }

  get shows(): Show[] { return this.showDataService.shows; }
}
