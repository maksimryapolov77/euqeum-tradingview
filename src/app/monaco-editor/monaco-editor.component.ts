import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark'
    // language: 'javascript'
  };
  code = '';

  @Output() symbolChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onInit(editor: { getPosition: () => void; }) {
    const line = editor.getPosition();
  }

  onKeyUp() {
    const symbol: string = this.code.replace(/(\r\n|\n|\r)/gm, '');
    this.symbolChanged.emit(symbol);
  }
}
