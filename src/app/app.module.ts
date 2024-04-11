import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { SingleDetailComponent } from './single-detail/single-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDetailsComponent,
    SingleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
