import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recordForm!: FormGroup;
  responseText: string = '';

  constructor(private formBuilder: FormBuilder, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.recordForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.recordForm.valid) {
      const formData = this.recordForm.value;
      this.detailsService.createRecord(formData).subscribe(
        (response) => {
          console.log(response);
          this.responseText = `Saved successfully!`;
        },
        (error) => {
          console.error(error);
          this.responseText = `Error occurred while saving record.`;
        }
      );
    }
  }
}
