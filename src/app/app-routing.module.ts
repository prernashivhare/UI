import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { CustDetailsComponent } from './cust-details/cust-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateDocumentComponent },
  { path: 'details', component: CustDetailsComponent },
  { path: 'form', component: CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
