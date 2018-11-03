import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';




import {LayoutModule} from './layout'

import {UtilsModule} from "./utils/utils.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,

  ],
  declarations: [

  ],
  exports: [
    CommonModule, FormsModule, RouterModule,

    LayoutModule,

    UtilsModule,

  ]
})
export class SmartadminModule {}
