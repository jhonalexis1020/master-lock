import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

const modules = [CommonModule, AppRoutingModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})

export class SharedModule { }
