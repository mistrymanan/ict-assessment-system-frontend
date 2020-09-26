import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../../services/assignments.service';
import { Assignment } from '../../../models/assignment';
import { DataService } from '../../../services/data.service';
import {Question} from '../../../models/question';

@Component({
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  assignment: Assignment;
  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentsService,
    private router: Router,
    private dataService: DataService
  ) {
    this.assignment = new Assignment();
  }

  async ngOnInit() {
    const slug  = this.route.snapshot.params.slug;
    this.assignment = await this.assignmentService.getAssignmentBySlug(slug).toPromise();
  }
  toggleStatus(): void {
    this.assignmentService.toggleAssignmentStatus(this.assignment.id).subscribe(
      () => {
        const current = this.assignment.status;
        this.assignment.status = current === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
      }
    );
  }
  editAssignment() {
    this.dataService.data = this.assignment;
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  deleteAssignment(): void {
    this.assignmentService.deleteAssignment(this.assignment.id).subscribe(
      () => {
        this.router.navigate(['assignments']);
      },
      console.error
    );
  }

  deleteQuestion(index: number): void {
console.log(index);
    const selectedQuestion: Question = this.assignment.questions[index];
    console.log(selectedQuestion);
    this.assignmentService.deleteQuestion(this.assignment.id, selectedQuestion.id)
      .subscribe(
      () => {
        this.assignment.questions.splice(index, 1);
        // this.router.navigate(['assignments', this.assignment.slug]);
      },
      console.error
    );
  }

  editQuestion(index: number) {
    const questionSlug =  this.assignment.questions[index].slug;
    this.router.navigate([questionSlug, 'edit'], {relativeTo: this.route});
  }
}
