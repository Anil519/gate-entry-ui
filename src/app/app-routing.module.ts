import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateEntryComponent } from './gate-entry/gate-entry.component';

const routes: Routes = [
  {
    path:'',
    component:GateEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
