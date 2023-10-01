import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ComonetntAnythingComponent } from './comonetnt-anything/comonetnt-anything.component';
import { SeventhTrialComponent } from './components/seventh-trial/seventh-trial.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ComonetntAnythingComponent,
    SeventhTrialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
