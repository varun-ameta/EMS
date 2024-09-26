import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/roles';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  isLoader:boolean=true;
  http = inject(HttpClient);
  ngOnInit(): void {
     this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<APIResponseModel>(environment.API_URL+"GetAllRoles").subscribe((resp: APIResponseModel) => {
      this.roleList = resp.data;
      this.isLoader=false;
    },error=>{
      alert("API Error");
      this.isLoader=false;
    })
  }

}
