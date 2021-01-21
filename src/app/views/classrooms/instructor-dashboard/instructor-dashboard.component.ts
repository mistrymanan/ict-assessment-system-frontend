import { Component, OnInit, ViewChild } from '@angular/core';
import {AssignmentsService} from '../../../services/assignments.service';
import {ActiveAssignment} from '../../../models/active-assignment';
import {Router} from '@angular/router';
import {GlobalConstants} from '../../../global-constants';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';  
@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {
  viewMode='classwork';
  modalRef: BsModalRef;
  startAssignmentProcess: boolean = false;
  currentAssignment: ActiveAssignment;
  statusBadge: any;
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('myModal1') public myModal1: ModalDirective;
  constructor(
    private assignmentsService: AssignmentsService,
    private modalService: BsModalService,
    private router: Router,
  ) { this.statusBadge = GlobalConstants.statusBadge; }
  activeAssignments: ActiveAssignment[];
 
  ngOnInit(): void {
    this.assignmentsService.getAllActiveAssignments().subscribe(
      (assignments) => {
        this.activeAssignments = assignments;
      }
    );
  }

  openModal(template: TemplateRef<any>, assignment: ActiveAssignment) {
    this.currentAssignment = assignment;
    this.modalRef = this.modalService.show(template);
  }

  startAssignment() {
    this.startAssignmentProcess = true;
    this.assignmentsService.startAssignment(this.currentAssignment.id).subscribe(
      () => {
        this.startAssignmentProcess = false;
        this.modalRef.hide();
        this.openAssignment(this.currentAssignment.slug);
      },
      () => {
        this.startAssignmentProcess = false;
        console.log('assignment cannot be started');
        this.modalRef.hide();
      }
    );
  }

  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }

  openAssignment(slug: string) {
    this.router.navigate([slug]);
  }

}
