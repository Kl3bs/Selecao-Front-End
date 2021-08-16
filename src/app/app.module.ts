import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';

import { IMaskModule } from 'angular-imask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { ListAllComponent } from './list-all/list-all.component';

@NgModule({
  declarations: [AppComponent, FormComponent, ListAllComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IMaskModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
