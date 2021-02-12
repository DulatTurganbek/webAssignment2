import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { LayoutComponent } from './root/layout/layout.component';
import { AddRecordComponent } from './root/layout/add-record/add-record.component';
import { ResultComponent } from './root/layout/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    LayoutComponent,
    AddRecordComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
