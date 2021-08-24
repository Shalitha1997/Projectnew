import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.router.navigate(['Patient-About'], {relativeTo : this.route});

  }

}
