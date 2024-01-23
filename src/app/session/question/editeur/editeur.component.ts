import {Component} from '@angular/core';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html'
})
export class EditeurComponent {
  editorOptions = {theme: 'vs-dark', language: 'typescript', automaticLayout: true};
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
}
