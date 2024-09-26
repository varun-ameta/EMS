import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  ngOnInit(): void {
    this.getAllUser();

  }
  getAllUser() {
    debugger;
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((resp: any) => {
      this.userList = resp.data;
    })
  }
}
