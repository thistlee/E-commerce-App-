import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { ProductService } from './products/product.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SiteLayoutModule,
    FormsModule,
    
  
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
