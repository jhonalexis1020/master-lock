import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';

const components = [MenuComponent];

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule
  ],
  exports: [...components]
})
export class LayoutModule { }
