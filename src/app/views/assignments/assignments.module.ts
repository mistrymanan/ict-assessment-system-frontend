import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AssignmentsRoutingModule} from './assignments-routing.module';
import {CreateAssignmentComponent} from './create-assignment/create-assignment.component';
import {AllAssignmentsComponent} from './all-assignments/all-assignments.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MarkdownModule} from 'ngx-markdown';
import {FormsModule} from '@angular/forms';
import {ViewAssignmentsComponent} from './view-assignments/view-assignments.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    declarations: [
        CreateAssignmentComponent,
        AllAssignmentsComponent,
        ViewAssignmentsComponent,
        AddQuestionComponent
    ],
    imports: [
        CommonModule,
        AssignmentsRoutingModule,
        AceEditorModule,
        FlexLayoutModule,
        MarkdownModule,
        FormsModule,
        NgSelectModule
    ]
})
export class AssignmentsModule {
}
