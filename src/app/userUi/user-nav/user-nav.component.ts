import { Component } from '@angular/core';
import { StudentAuthService } from 'src/app/services/student-auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private authService: StudentAuthService ){}
 logout(): void {
    this.authService.logout();
  }

}
