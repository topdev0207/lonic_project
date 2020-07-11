import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPagePage } from './post-page.page';

const routes: Routes = [
  {
    path: '',
    component: PostPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPagePageRoutingModule {}
