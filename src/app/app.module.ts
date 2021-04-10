import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule  } from '@angular/fire';
import { HelloFirebaseComponent } from './hello-firebase/hello-firebase.component';
import { MyErrorHandler } from './error-handling';
import { NgModule, ErrorHandler } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HelloFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
    providers: [
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
