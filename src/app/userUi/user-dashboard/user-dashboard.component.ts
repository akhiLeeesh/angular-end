import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from 'src/app/services/student-auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  student: any = '';
  errorMsg: string = '';
  currentTab: string = 'profile';

  selectTab(tab: string): void {
    this.currentTab = tab;
  }

  constructor(private authService: StudentAuthService) { }

  ngOnInit(): void {
    this.fetchStudentData();
  }

 
  fetchStudentData(): void {
    this.authService.getStudentProfile().subscribe({
      next: (res) => {
        this.student = res.data;
      },
      error: (err) => {
        this.errorMsg = err.error.message || 'Failed to load student data.';
      }
    });
    
  }



}
