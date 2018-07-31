import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CecPageComponent } from './cec-page.component';
import { MinutesPageComponent } from './minutes-page';

const routes: Routes = [{
  path: '',
  component: CecPageComponent,
  children: [{
    path: 'minutes/:date',
    component: MinutesPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CecPageRoutingModule {}
