import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  username?: string | null;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('activeUser');
    });
  }
  logout() {
    this.router.navigate(['/home']);
  }
}
