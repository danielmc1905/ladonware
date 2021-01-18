import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { EditProductDialogComponent } from './components/edit-product-dialog/edit-product-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    HomeComponent,
    ProductFilterPipe,
    EditProductDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
