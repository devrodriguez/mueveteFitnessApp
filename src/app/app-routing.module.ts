import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { 
    path: 'contact', 
    loadChildren: './pages/contact/contact.module#ContactPageModule' 
  },
  { 
    path: 'product', 
    loadChildren: './pages/product/product.module#ProductPageModule' 
  },
  { 
    path: 'trainer', 
    loadChildren: './pages/trainer/trainer.module#TrainerPageModule' 
  },
  { 
    path: 'routine', 
    loadChildren: './pages/routine/routine.module#RoutinePageModule' 
  },
  { 
    path: 'register', 
    loadChildren: './pages/register/register.module#RegisterPageModule' 
  },
  { 
    path: 'login', 
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { 
    path: 'forgotten', 
    loadChildren: './pages/forgotten/forgotten.module#ForgottenPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
