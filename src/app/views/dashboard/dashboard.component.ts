import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AssignmentsService } from '../../services/assignments.service';
import { ActiveAssignment } from '../../models/active-assignment';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router
    ){}
  activeAssignments: ActiveAssignment[];
  ngOnInit(): void {
    this.assignmentsService.getAllActiveAssignments().subscribe(
      (assignments) => {
        this.activeAssignments = assignments;
      }
    )
   }
   openAssignment(slug: string){
    this.router.navigate([slug]);
   }
}
