import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { SidebarComponent } from '../site-layout/sidebar/sidebar.component';


const routes: Routes = [
  {path:'site-layout', component:SidebarComponent},
  {
    
    path: 'site-layout',
    loadChildren: () =>
      import('../site-layout/site-layout.module').then((m) => m.SiteLayoutModule),
  },
  { path: '', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  {path:'category/:id', component:ViewProductByCategoryComponent},
  //{ path: 'list-product', component: ViewAllProductComponent},
  { path: 'search-date', component:ViewProductByDateComponent},
  { path: 'delete-product/:id', component:DeleteProductComponent},
  { path: 'view-product/:id', component:ViewProductComponent},
  { path: 'update-product/:id', component:UpdateProductComponent},






  


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
