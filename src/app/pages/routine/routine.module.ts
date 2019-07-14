import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoutinePage } from './routine.page';
import { ProgramatorPage } from '../programator/programator.page';
import { ProgramatorPageModule } from '../programator/programator.module';

const routes: Routes = [
  {
    path: '',
    component: RoutinePage
  }
];

@NgModule({
  entryComponents: [
    ProgramatorPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramatorPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoutinePage]
})
export class RoutinePageModule {}
