import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/roles';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AlertComponent } from "../../reuseableComponent/alert/alert.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, AsyncPipe, AlertComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);
  userList$:Observable<any>=new Observable<any>
  ngOnInit(): void {
    this.loadClient();
    this.userList$=this.clientService.getAllUsers();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((resp: APIResponseModel) => {
      this.clientList = resp.data;
    })
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((resp: APIResponseModel) => {
      if (resp.result) {
        alert("Client Created/Updated Successfully");
        this.loadClient();
        this.resetForm();
      } else {
        alert(resp.message);
      }
    })
  }
  resetForm() {
    this.loadClient();
    this.clientObj = new Client();
  }
  onDelete(id: number) {
    const ifDelete = confirm("Are you sure you want to Delete?");
    if (ifDelete) {
      this.clientService.deleteClientById(id).subscribe((resp: APIResponseModel) => {
        if (resp.result) {
          alert("Client Deleted Successfully");
          this.loadClient();
        } else {
          alert(resp.message);
        }
      })
    }
  }
  onEdit(data: Client) {
    this.clientObj = data;
  }
}
