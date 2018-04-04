import { NgJexiaModule } from '@ngJexia/core';
import { DataOperationsModule } from '@ngJexia/dataOperations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    NgJexiaModule.initialize({
      projectID: 'projectID',
      key: 'key',
      secret: 'secret',
      providers: [
        DataOperationsModule,
      ],
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
