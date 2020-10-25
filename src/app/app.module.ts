import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PracticeComponent } from './components/practice/practice.component';
import { FormsModule } from '@angular/forms';
import { ImportantTextDirective } from './components/practice/important-text.directive';
import { ArrayLengthPipe } from './components/practice/array-length.pipe';
import { UsersModule } from './modules/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PracticeComponent,
    ImportantTextDirective,
    ArrayLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
