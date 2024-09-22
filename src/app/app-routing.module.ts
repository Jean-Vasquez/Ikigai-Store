import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/components/main/main.component';
import { UserSettingsComponent } from './user/components/user-settings/user-settings.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CreateUserComponent } from './auth/components/create-user/create-user.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/components/checkout/checkout.component';
import { ReceiptListComponent } from './receipts/components/receipt-list/receipt-list.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ReceiptDetailComponent } from './receipts/components/receipt-detail/receipt-detail.component';
import { AboutComponent } from './about/components/about/about.component';
import { RegisterProductComponent } from './products/components/register-product/register-product.component';

const routes: Routes = [

  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'index',component: MainComponent},
  {path:'iniciar-sesion',component: LoginComponent},
  {path:'registrar-cliente',component: RegisterComponent},
  {path:'crear-usuario',component: CreateUserComponent},
  {path:'productos',component: ProductListComponent},
  {path:'detalle-producto',component: ProductDetailComponent},
  {path:'registrar-producto',component: RegisterProductComponent},
  {path:'preventa',component: CheckoutComponent},
  {path:'comprobantes',component:  ReceiptListComponent},
  {path:'detalle-comprobante',component: ReceiptDetailComponent},
  {path:'configuracion-usuario',component: UserSettingsComponent},
  {path:'nosotros',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
