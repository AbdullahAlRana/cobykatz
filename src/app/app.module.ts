import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BehindTheCanvasComponent } from './behind-the-canvas/behind-the-canvas.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineOverviewComponent } from './timeline-overview/timeline-overview.component';
import { CollectionOverviewComponent } from './collection-overview/collection-overview.component';
import { CollectionSelectionComponent } from './collection-selection/collection-selection.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    HomeComponent,
    AboutComponent,
    BehindTheCanvasComponent,
    TimelineComponent,
    TimelineOverviewComponent,
    CollectionOverviewComponent,
    CollectionSelectionComponent,
    ExhibitionsComponent,
    CollaborationsComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
