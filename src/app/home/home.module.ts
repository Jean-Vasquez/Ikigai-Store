import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../products/products.module';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule
  ],exports:[
    MainComponent
  ]
})
export class HomeModule { }
