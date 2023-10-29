import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StatusComponent } from './status/status.component';
import { HandsComponent } from './hands/hands.component';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    // MatDialog,
    MatDialogModule,
    // MatDialog
  ]
})
export class TypingChallengeModule { }
