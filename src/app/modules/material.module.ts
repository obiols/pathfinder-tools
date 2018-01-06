import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }
