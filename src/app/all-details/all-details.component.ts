import { Component } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.scss']
})
export class AllDetailsComponent {
  allDetails: any[] = [];
  dataLoaded: boolean = false;

  constructor(private detailsService: DetailsService) { }

  getAllDetails(): void {
    this.detailsService.getAllDetails().subscribe(data => {
      this.allDetails = data;
      this.dataLoaded = true;
    });
  }
}
