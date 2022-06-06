import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'BehindTheCanvas',
    component: BehindTheCanvasComponent
  },
  {
    path: 'TheTimeLine',
    component: TimelineComponent
  },
  {
    path: 'TimeLineOverView',
    component: TimelineOverviewComponent
  },
  {
    path: 'CollectionOverview',
    component: CollectionOverviewComponent
  },
  {
    path: 'CellectionSelection',
    component: CollectionSelectionComponent
  },
  {
    path: 'Exhibitions',
    component: ExhibitionsComponent
  },
  {
    path: 'Collaborations',
    component: CollaborationsComponent
  },
  {
    path: 'Canvas',
    component: CanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
