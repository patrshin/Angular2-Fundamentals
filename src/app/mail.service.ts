import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0,text:"Do not believe what John Says"},
    {id: 1,text:"yeah"},
    {id: 2,text:"plz"}
  ];


  update(id, text) {
    this.messages = this.messages.map(m =>
    m.id === id
      ? {id, text}
      : m
      )
  }

  constructor() { }

}
