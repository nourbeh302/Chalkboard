import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './ui/feed.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeedRoutingModule,
    FeedComponent
  ]
})
export class FeedModule { }
