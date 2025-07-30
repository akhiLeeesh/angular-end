import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `<app-login [userType]="'admin'"></app-login>`,
})
export class AdminComponent { }
