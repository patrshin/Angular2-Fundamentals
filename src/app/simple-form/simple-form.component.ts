import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
      <input #myInput type="text" [(ngModel)]="message"
       [ngClass] = "{mousedown:isMousedown}"
       (mousedown)="isMousedown = true"
       (mouseup) = "isMousedown = false"
       (mouseleave) = "isMousedown = false" 
       >
      <button (click)="update.emit({text:message})"> Click </button>
  `,
  styles: [
    `:host{display: flex; flex-direction: column;}
    input:fcous{ font-weight: bold;}
    .mousedown{border: 2px solid green;}
    input:focus{font-weight: bold; outline:none;}` 
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() message; 

  @Output() update = new EventEmitter();

  onClick(event, value) {
    alert(value);
    alert(event);
  }

  constructor() {
    //this.message = ""
  }

  ngOnInit() {
  }

}
