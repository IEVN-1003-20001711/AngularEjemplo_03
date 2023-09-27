import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductosFilterPipe } from './productos/productos-filter.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductosFilterPipe,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
