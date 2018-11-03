

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavigationComponent} from "./navigation.component";
import {SmartMenuDirective} from "./smart-menu.directive";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavigationComponent,
    SmartMenuDirective,
  ],
  exports: [
    NavigationComponent,
    SmartMenuDirective,
  ]
})
export class NavigationModule{}
