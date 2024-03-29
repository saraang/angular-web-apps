import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgxLoadersModule } from '@ngx-lite/loaders';

import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxLoadersModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
