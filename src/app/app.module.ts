import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent} from './components/product/product.component'

import { FormsModule } from '@angular/forms';

import { ProductosComponent } from './components/productos/productos.component';
//import { ContactosComponent } from './components/contactos/components/contactos.component';
import { DemoComponent } from './demo/demo.component';

import { PageNotFoundComponent } from './components/page-not-found/components/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/components/layout.component'; //una vez agregado aca, tiene que ir al imports del NgModule
import { SharedModule } from './shared/shared.module';
import { CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
