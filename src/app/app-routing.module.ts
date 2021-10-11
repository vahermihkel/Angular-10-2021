import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  // path: 'localhost:4200', component: ./home/home.component.html
                            // + .css kujunduse jaoks
                            // + .ts dünaamilisuse jaoks
  { path: '', component: HomeComponent },
    // path: 'localhost:4200/ostukorv', component ./cart/cart.component
  { path: 'ostukorv', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
