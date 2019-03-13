import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'completed', component: ItemListComponent },
  { path: 'undone', component: ItemListComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
