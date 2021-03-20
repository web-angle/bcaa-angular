import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayOrderComponent } from './display-order/display-order.component';
import { NewComponent } from './new/new.component';
import { CompletedComponent } from './completed/completed.component';
import { UpdatedComponent } from './updated/updated.component'
 
const routes: Routes = [
  {path: 'display-order/:container/:no/:date', component:DisplayOrderComponent},
  {path: '', component:NewComponent},
  {path: 'completed-orders', component:CompletedComponent},
  {path: 'updated-orders', component:UpdatedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
