import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { Error404PageComponent } from './heroes/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path:"",
    component: LayoutPageComponent
  },
  {
    path:"auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule )
  },
  {
    path:"heroes",
    loadChildren: ()=> import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path:"404",
    component: Error404PageComponent
  },
  {
    path:"",
    redirectTo:"heroes",
    pathMatch:'full'
  },
  {
    path:"**",
    redirectTo:"heroes",
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
