import { NgModule } from '@angular/core';
import { CommentBlockTypeModule } from './comment-block-type/comment-block-type.module';
import { CommentBlockComponent } from './comment-block.component';




@NgModule({

    declarations: [
    CommentBlockComponent,
    ],

    imports     : [
        CommentBlockTypeModule

    ],
    exports     : [

    ]
})
export class CommentBlockModule
{
}
