import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIncidentsComponent } from './list-incidents/list-incidents.component';
import { OverviewColorComponent } from './overview-color/overview-color.component';


const routes: Routes = [
  {
    path: '',
    component: ListIncidentsComponent,
  },
  {
    path: ':id',
    component: OverviewColorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
