import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {NgReduxModule, DevToolsExtension} from 'ng2-redux';
import { App } from './app.component';
import { TodoComponent } from '../components/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgReduxModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    App,
    TodoComponent,
  ],
  bootstrap: [ App ],
  providers: [
    DevToolsExtension,
  ]
})
export class AppModule {}
