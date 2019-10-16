import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript'
  };
  code = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

  onInit(editor) {
    const line = editor.getPosition();
  }
}
