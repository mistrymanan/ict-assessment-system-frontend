import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {DataTablesModule} from 'angular-datatables';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';
import {MarkdownModule} from 'ngx-markdown';
import {AceEditorModule} from 'ng2-ace-editor';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AuthComponent} from './views/auth/auth.component';
import {authInterceptorProviders} from './views/auth/token.interceptor';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ViewAnswerComponent } from './views/classrooms/classroom-submissions/view-answer/view-answer.component';
import { CustomSideBarComponent } from './containers/custom-side-bar/custom-side-bar.component';
import { SpinnerComponent } from './views/spinner/spinner.component';

//import { TempComponent } from './views/classroom/temp/temp.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    MarkdownModule.forRoot(),
    AceEditorModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    AuthComponent,
    CustomSideBarComponent,
    SpinnerComponent,
    //TempComponent,
    //InstructorDashboardComponent,

    //AddClassroomComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    authInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
