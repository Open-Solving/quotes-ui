import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuotesRoutingModule} from './quotes-routing.module';
import {QuotesListComponent} from './quotes-list.component';
import {NbCardModule} from '@nebular/theme';
import { QuoteItemComponent } from './quote-item.component';


@NgModule({
  declarations: [QuotesListComponent, QuoteItemComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    NbCardModule
  ],
  entryComponents: [QuotesListComponent]
})
export class QuotesModule {
}