import { Component } from '@angular/core';
import {MatSidenavModule} from  '@angular/material/sidenav' ;
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems =[
    { label :"listado" ,icon:"label", url:"./list"},
    { label :"Añadir" ,icon:"add", url:"./new-hero"},
    { label :"Buscar" ,icon:"label", url:"./search"},

  ]
}
