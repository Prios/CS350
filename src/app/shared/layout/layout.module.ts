import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {NavigationModule} from "./navigation/navigation.module";
import {ToggleActiveDirective} from "../utils/toggle-active.directive";
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import {RouterModule} from "@angular/router";
import {TooltipModule, BsDropdownModule} from "ngx-bootstrap";
import {UtilsModule} from "../utils/utils.module";

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule,
    RouterModule,

    UtilsModule,


    TooltipModule,
    BsDropdownModule,
  ],
  declarations: [
    MainLayoutComponent,
    EmptyLayoutComponent,
  ],
  exports:[
    NavigationModule,
  ]
})
export class LayoutModule{

}
