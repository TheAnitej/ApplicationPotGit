import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { TypingChallengeModule } from './typing-challenge/typing-challenge.module';
import { CompOneComponent } from './typing-challenge/comp-one/comp-one.component';
import { CompTwoComponent } from './img-viewer/comp-two/comp-two.component';
import { HandsComponent } from './typing-challenge/hands/hands.component';






@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    HandsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatDividerModule,
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      FormsModule,
       MatFormFieldModule, 
       MatInputModule,
       MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
