import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';

const routes: Routes = [
  // path: 'localhost:4200', component: ./home/home.component.html
                            // + .css kujunduse jaoks
                            // + .ts dünaamilisuse jaoks
  { path: '', component: HomeComponent },
    // path: 'localhost:4200/ostukorv', component ./cart/cart.component
  { path: 'ostukorv', component: CartComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/lisa-ese', component: AddItemComponent },
  { path: 'admin/muuda-ese', component: EditItemComponent },
  { path: 'admin/esemed', component: ViewItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
