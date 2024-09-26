import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoader:boolean=true;
  masterservice = inject(MasterService);

  ngOnInit(): void {
    this.masterservice.getDesignation().subscribe((resp: APIResponseModel) => {
      this.designationList = resp.data;
      this.isLoader=false;

    }, error => {
      alert("API Error");
      this.isLoader=false;
    })
  }
}
