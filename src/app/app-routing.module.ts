import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BehindTheCanvasComponent } from './behind-the-canvas/behind-the-canvas.component';
import { TimelineComponent } from './timeline/timeline.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
