import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = "Roles";

  changeTab(Component: string) {
    this.currentComponent = Component;
  }
}
