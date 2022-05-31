import { NgModule } from '@angular/core';
import { CommentBlockModule } from '../comment-block/comment-block.module';
import { MainConteneurComponent } from './main-conteneur.component';



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
