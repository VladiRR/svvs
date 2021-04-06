import { NgModule } from '@angular/core';
import { layoutContainers } from './layout.common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...layoutContainers],
  exports: [...layoutContainers],
  imports: [RouterModule],
})
export class LayoutModule {}
