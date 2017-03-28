import {Inject} from '@angular/core';
import { Component } from '@angular/core';
import { MailService } from './mail.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Hello';
  onUpdate(id, event) {
    this.mail.update(id, event);
  }
  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,    
  ){}
}
