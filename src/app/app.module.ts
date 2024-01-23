import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MonacoEditorModule} from 'ngx-monaco-editor-v2';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EditeurComponent} from "./session/question/editeur/editeur.component";
import {EnonceComponent} from "./session/question/enonce/enonce.component";
import {QuestionComponent} from "./session/question/question.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SessionComponent} from "./session/session.component";

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    QuestionComponent,
    EnonceComponent,
    EditeurComponent
  ],
  imports: [
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
