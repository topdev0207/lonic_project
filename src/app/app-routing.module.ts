import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
const routes: Routes = [
  { path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)


  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'post-page',
    loadChildren: () => import('./pages/post-page/post-page.module').then( m => m.PostPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-note',
    loadChildren: () => import('./pages/create-note/create-note.module').then( m => m.CreateNotePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
