import { NgModule } from '@angular/core';
import { CommentBlockTypeComponent } from './comment-block-type.component';
import { HeaderParagraphComBlockComponent } from './Com-block-parts/header-paragraph-com-block/header-paragraph-com-block.component';
import { ContenuMediaComBlockComponent } from './Com-block-parts/contenu-media-com-block/contenu-media-com-block.component';




@NgModule({

    declarations: [
        CommentBlockTypeComponent,
        HeaderParagraphComBlockComponent,
        ContenuMediaComBlockComponent,
    ],

    imports     : [

    ],
    exports     : [

    ]
})
export class CommentBlockTypeModule
{
}
