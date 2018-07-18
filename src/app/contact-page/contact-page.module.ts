import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContactPageRoutingModule
  ],
  declarations: [ContactPageComponent],
  entryComponents: [ContactPageComponent]
})
export class ContactPageModule { }
