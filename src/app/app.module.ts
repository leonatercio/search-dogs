import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { DogService } from './services/index';
import { HomeComponent } from './home/index';
import { DetailComponent } from './detail/index';
import { MaterializeModule } from 'angular2-materialize';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    routing,
    LazyLoadImageModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  providers: [
    DogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
