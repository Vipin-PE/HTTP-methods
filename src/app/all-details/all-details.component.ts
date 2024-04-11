import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.scss']
})
export class AllDetailsComponent implements OnInit {
  allDetails: any[] = [];

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
  }

  getAllDetails(): void {
    this.detailsService.getAllDetails().subscribe(data => {
      this.allDetails = data;
    });
  }
}
