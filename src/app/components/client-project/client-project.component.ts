import { Component, OnInit,inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee, Project } from '../../model/interface/roles';
import { Client } from '../../model/class/client';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from "../../reuseableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId:new FormControl(0),
    projectName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    startDate:new FormControl(""),
    expectedEndDate:new FormControl(""),
    leadByEmpId:new FormControl(""),
    completedDate:new FormControl(""),
    contactPerson:new FormControl(""),
    contactPersonContactNo:new FormControl(""),
    totalEmpWorking:new FormControl(""),
    projectCost:new FormControl(""),
    projectDetails:new FormControl(""),
    contactPersonEmailId:new FormControl(""),
    clientId:new FormControl("")
  })

  clientSrv=inject(ClientService);
  employeeList:Employee[]=[];
  clientlist:Client[]=[];
  projectlist:Project[]=[];
  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.loadProject();
      
  }
  loadProject(){
    this.clientSrv.getAllClientProject().subscribe((resp:APIResponseModel)=>{
      this.projectlist=resp.data;
      console.log(resp.data);
    })
  }
  getAllEmployee(){
    this.clientSrv.getAllEmployees().subscribe((resp:APIResponseModel)=>{
      this.employeeList=resp.data;
    })
  }
  getAllClient(){
    this.clientSrv.getAllClients().subscribe((resp:APIResponseModel)=>{
      this.clientlist=resp.data;
    })
  }
  onSaveProject(){
    const fromValue=this.projectForm.value;
    debugger;
    this.clientSrv.AddUpdateClientProject(fromValue).subscribe((resp:APIResponseModel)=>{
      if(resp.result){
        alert("Project Created Successfully");  
        this.loadProject();
      }else{ 
        alert(resp.message);
      }
    })
  }
}
