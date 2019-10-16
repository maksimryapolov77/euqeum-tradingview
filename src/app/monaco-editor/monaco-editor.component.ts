import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark'
    // language: 'java'
  };
  // code = 'function x() {\nconsole.log("Hello world!");\n}';
  code = '';

  constructor() { }

  ngOnInit() {
  }

  onInit(editor: { getPosition: () => void; }) {
    const line = editor.getPosition();
  }
}
