import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeEditorComponent } from './code-editor.component';

const routes: Routes = [
    {
        path: '',
        component: CodeEditorComponent,
        data: {
            title: 'Code Editor'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CodeEditorRoutingModule {}
