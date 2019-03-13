import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library as FontAwesome } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';

import { ItemStorageService } from './services/storage/item-storage.service';
import { ItemFilterService } from './services/worker/filter/item-filter.service';

import { ItemFormInterface } from './interfaces/abstract/item-form.interface';
import { ItemListInterface } from './interfaces/abstract/item-list.interface';
import { ItemInterface } from 'src/app/interfaces/abstract/item.interface';
import { ItemFilterInterface } from './interfaces/abstract/item-filter.interface';

FontAwesome.add(fas)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemFormComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    ItemStorageService,
    ItemFilterService,
    { provide: ItemFormInterface, useExisting: ItemStorageService },
    { provide: ItemListInterface, useExisting: ItemStorageService },
    { provide: ItemInterface, useExisting: ItemStorageService },
    { provide: ItemFilterInterface, useExisting: ItemFilterService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
