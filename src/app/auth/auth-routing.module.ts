import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:"login", component:LoginPageComponent},
      {path:"new-acount", component:RegisterPageComponent},
      {path:"**", redirectTo:"login"}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }