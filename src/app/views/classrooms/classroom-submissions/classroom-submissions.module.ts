import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSubmissionsAnswersComponent } from './view-submissions-answers/view-submissions-answers.component';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';
import { ViewAnswerComponent } from './view-answer/view-answer.component';
import { ClassroomSubmissionsRoutingModule } from './classroom-submissions-routing.module';
import { CodeEditorModule } from '../../code-editor/code-editor.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { AceEditorModule } from 'ng2-ace-editor';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataTablesModule } from 'angular-datatables';
import { ViewPlagiarismsComponent } from './view-plagiarisms/view-plagiarisms.component';
import { ViewPlagiarismResultsComponent } from './view-plagiarism-results/view-plagiarism-results.component';


@NgModule({
  declarations: [ViewSubmissionsAnswersComponent, ViewSubmissionsComponent, ViewAnswerComponent, ViewPlagiarismsComponent, ViewPlagiarismResultsComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    ClassroomSubmissionsRoutingModule,
    CodeEditorModule,
    CollapseModule,
    NgSelectModule,
    AceEditorModule,
    MarkdownModule,
    FormsModule,
    FlexLayoutModule,
    TooltipModule
  ]
})
export class ClassroomSubmissionsModule { }
