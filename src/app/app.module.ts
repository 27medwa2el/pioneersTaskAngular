import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule,DxLookupModule,DxSelectBoxModule,DxFormModule ,DxTabPanelModule,DxListModule,DxDataGridModule,DxLoadIndicatorModule,DxLoadPanelModule   } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import dxDataGrid from 'devextreme/ui/data_grid';
import { CustomerAddComponent } from 'src/app/customer-add/customer-add.component';
import { DataService } from './Services/data.service';

const routes: Routes = [
  {path: '', component: CustomerListComponent },
  { path: 'component1', component: AppComponent },
  { path: 'customerslist', component: CustomerListComponent},
  { path:'customeradd', component: CustomerAddComponent}
];
@NgModule({
  
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
  ],
  imports: [

    RouterModule.forRoot(routes),
    BrowserModule,
    DxButtonModule,
    DxLookupModule,
    DxSelectBoxModule,
    HttpClientModule,
    DxFormModule,
    DxTabPanelModule,
    DxListModule,
    DxDataGridModule,
    DxLoadIndicatorModule,
    DxLoadPanelModule

  ],
  exports:[
   RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
