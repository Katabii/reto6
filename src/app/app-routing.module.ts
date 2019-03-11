import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'segunda/:nombre/:apellido/:email/:fecha', loadChildren: './pages/segunda/segunda.module#SegundaPageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },  { path: 'todo-details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
