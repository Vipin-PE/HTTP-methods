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

  updateDetail(): void {
    console.log('Updating detail:', this.detail);
    if (this.detail && this.detailId !== undefined) {
      this.detailsService.updateRecord(this.detailId, this.detail).subscribe(
        updatedDetail => {
          console.log('Update successful:', updatedDetail);
          this.detail = updatedDetail;
        },
        error => {
          console.error('Update failed:', error);
        }
      );
    }
  }
  
  patchDetail(): void {
    console.log('Patching detail:', this.detail);
    if (this.detail && this.detailId !== undefined) {
      const patchData = { name: this.detail.name }; 
      this.detailsService.patchRecord(this.detailId, patchData).subscribe(
        patchedDetail => {
          console.log('Patch successful:', patchedDetail);
          this.detail = patchedDetail;
        },
        error => {
          console.error('Patch failed:', error);
        }
      );
    }
  }
  

  deleteDetail(): void {
    if (this.detail && this.detailId !== undefined) {
      this.detailsService.deleteRecord(this.detailId).subscribe(() => {
        this.detail = null; 
      });
    }
  }
}
