import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
