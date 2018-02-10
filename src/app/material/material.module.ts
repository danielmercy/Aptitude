import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatTooltipModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule, MatCheckboxModule, MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({
  imports: [CommonModule, MatTooltipModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule, MatCheckboxModule, MatMenuModule, MatSidenavModule, MatListModule],
  exports: [MatIconModule, MatTooltipModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule, MatCheckboxModule, MatMenuModule, MatSidenavModule, MatListModule]
})


export class MaterialModule { }