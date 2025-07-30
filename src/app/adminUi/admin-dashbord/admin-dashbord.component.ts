import { Component } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent {

  activeTab: 'add' | 'list' | 'demo' = 'add';
  editingStudent: any = null;
  loading: boolean = false;
  students: any[] = [];
  studentCount: number = 0;
  demoStudents: any;


  student = {
    username: '',
    url: '',
    email: '',
    phone: '',
    password: ''
  };


  constructor(private authService: AdminAuthService) { }

  setTab(tab: 'add' | 'list' | 'demo') {

    this.activeTab = tab;
    if (tab === 'list') {
      setTimeout(() => {
        this.fetchStudents();
        this.toggleMenu()
      }, 500);
    } else if (tab === 'add') {
      this.toggleMenu()
    } else if (tab === 'demo') {
      this.authService.demoregisterdstudents().subscribe((res: any) => {
        this.demoStudents = res.data;
        console.log(res.data)
      })
    }
  }

  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;

  }

  //  admin can add studnets based on admin token

  submitForm() {
    this.loading = true;
    const token = localStorage.getItem('admin_token');
    if (token) {
      this.authService.addStudent(token, this.student).subscribe({
        next: (response) => {
          this.student = {
            username: '',
            url: '',
            email: '',
            phone: '',
            password: ''
          };

        },
        error: (err) => {
          console.error('Failed to add student:', err);
          this.loading = false;

        },
        complete: () => {
          this.loading = false;
          alert('User Created Successfully ' + this.student.username)
        }
      });
    } else {
      console.error('No admin_token found in localStorage');
      this.loading = false;

    }
  }

  //  admin logout

  logout() {
    this.authService.logout();
  }


  //  admin can featch studnets based on admin token

  fetchStudents() {
    const token = localStorage.getItem('admin_token');

    if (token) {
      this.authService.getAllStudents(token).subscribe({
        next: (res) => {
          this.students = res.data;
          this.studentCount = this.students.length;
        },
        error: (err) => {
          console.error('Failed to fetch students:', err);
        }
      });
    } else {
      console.error('No admin_Token found in localStorage');
    }
  }
  // handleVideoUpload(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // You can upload to server or save locally as needed
  //     this.editingStudent.videoFile = file;
  //   }
  // }
  // //  admin can edit studnets based on admin token and student id based

  editStudent(student: any) {
    this.editingStudent = { ...student };
  }

  cancelEdit() {
    this.editingStudent = null;
  }

  updateStudent() {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      alert('Admin token not found.');
      return;
    }

    this.authService.updateStudent(this.editingStudent._id, this.editingStudent, token).subscribe({
      next: (res) => {
        alert('Student updated successfully!');
        this.editingStudent = null;
        this.fetchStudents();
      },
      error: (err) => {
        console.error('Error updating student:', err);
        alert('Failed to update student.');
      }
    });
  }


}


