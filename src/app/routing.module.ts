import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: 'signup', component: SignUpComponent },
    {path: 'login' , component: LoginComponent },
    {path: 'products', component: ProductsComponent },
    ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {}
