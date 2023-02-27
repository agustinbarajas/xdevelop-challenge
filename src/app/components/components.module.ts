import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AddressFormComponent } from './address-form/address-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { HeaderComponent } from './header/header.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PersonalFormComponent,
    CompanyFormComponent,
    AddressFormComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  exports: [
    HeaderComponent,
    PersonalFormComponent,
    CompanyFormComponent,
    AddressFormComponent,
  ],
})
export class ComponentsModule {}
