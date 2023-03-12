import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule,DxLookupModule,DxSelectBoxModule,DxFormModule ,DxTabPanelModule  } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxLookupModule,
    DxSelectBoxModule,
    HttpClientModule,
    DxFormModule,
    DxTabPanelModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
