import {AfterViewInit, Component} from '@angular/core';
import * as Split from 'split.js';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements AfterViewInit {
  ngAfterViewInit() {
    Split(['.enonce', '.editeur'], {
      sizes: [50, 50], // Démarre avec une division 50/50
      minSize: 100, // Taille minimale en pixels pour chaque panneau
      gutterSize: 8, // Taille de la gouttière
      cursor: 'col-resize' // Type de curseur
    });
  }
}
