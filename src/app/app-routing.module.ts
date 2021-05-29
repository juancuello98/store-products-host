import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {LayoutComponent} from './components/layout/components/layout.component';

import{AdminGuard} from './guards/admin.guard';
const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path:'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'productos',
        loadChildren: () => import('./components/productos/productos.module').then(p => p.ProductosModule)
      },
      {
        path:'contacto',
        canActivate:[AdminGuard],
        loadChildren: () => import('./components/contactos/contactos.module').then(c => c.ContactosModule)
      },
      {
        path:'demo',
        component: DemoComponent
      }
    ]
  },
  {

      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  {
      path:'**',
      loadChildren: () => import('./components/page-not-found/page.notfound.module').then(c => c.PageNotFoundModule) // cambiar aca
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
