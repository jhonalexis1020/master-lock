import { Component } from '@angular/core';
import { MENU } from 'src/app/core/model/common/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  //Const
  Menu = MENU;

  constructor() { }

}
