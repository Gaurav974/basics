import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Singlefilecomponentns } from './shared/components/dummy/dummy.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { PropbindingComponent } from './shared/components/propbinding/propbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    Singlefilecomponentns,
    ProductsComponent,
    FormsComponent,
    PropbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
