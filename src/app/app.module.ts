import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { HierarchicalMultiselectorModule } from './modules/hierarchical-multiselector/hierarchical-multiselector.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    //    NgbModule,
    RouterModule.forRoot([]),
    //  HierarchicalMultiselectorModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
