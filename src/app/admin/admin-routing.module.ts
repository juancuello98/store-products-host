import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent} from '../admin/components/nav/nav.component';
import { DashboardComponent} from '../admin/components/dashboard/dashboard.component';
import { TableDataSource } from '../admin/components/table/table-datasource';
import { TableComponent } from './components/table/table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent} from './components/product-create/product-create.component';

const routes: Routes = [

  {
    path:'',
    component:NavComponent,
    children: [
      {
        path:'create',
        component:ProductFormComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'table',
        component: TableComponent
      },
      {
        path:'products',
        component: ProductListComponent
      },
      {
        path:'products/create',
        component: ProductCreateComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
