import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  template: `<app-login [userType]="'user'"></app-login>`,
})
export class UserComponent {

}
