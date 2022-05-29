import { NgModule } from '@angular/core';
import { MainConteneurComponent } from './main-conteneur.component';

import { CommentBlockModule } from '../comment-block/comment-block.module';

@NgModule({
    declarations: [
      MainConteneurComponent
    ],
    imports     : [
        CommentBlockModule
    ],
    exports     : [
       MainConteneurComponent
    ]
})
export class MainConteneurModule
{
}
