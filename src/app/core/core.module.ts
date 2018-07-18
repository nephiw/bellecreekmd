import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SiteNavigationComponent } from './site-navigation/site-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SiteNavigationComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SiteNavigationComponent
  ]
})
export class CoreModule { }
