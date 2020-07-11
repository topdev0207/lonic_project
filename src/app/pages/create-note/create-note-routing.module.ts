import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNotePage } from './create-note.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNotePageRoutingModule {}
