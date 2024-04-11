import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-single-detail',
  templateUrl: './single-detail.component.html',
  styleUrls: ['./single-detail.component.scss']
})
export class SingleDetailComponent implements OnInit {
  detailId: number | undefined;
  detail: any;

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
  }

  getDetailById(): void {
    if (this.detailId !== undefined) {
      this.detailsService.getDetailById(this.detailId).subscribe(data => {
        this.detail = data;
      });
    }
  }
}
