import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

import { MainConteneurModule } from '../main-conteneur/main-conteneur.module';

@NgModule({
    declarations: [
        ContentComponent, 
    ],
    imports     : [
        RouterModule,
        FuseSharedModule,
        MainConteneurModule

    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
