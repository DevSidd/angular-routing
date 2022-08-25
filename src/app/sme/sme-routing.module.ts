import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmePanelComponent } from './components/sme-panel/sme-panel.component';

const routes: Routes = [
  { path: '', component: SmePanelComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmeRoutingModule {}
