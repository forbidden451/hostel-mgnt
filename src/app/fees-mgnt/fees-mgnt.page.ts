import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fees-mgnt',
  templateUrl: './fees-mgnt.page.html',
  styleUrls: ['./fees-mgnt.page.scss'],
})
export class FeesMgntPage implements OnInit {

  constructor(private router : Router) { }

  pending_fees() {
    this.router.navigate(['/fees-due'])
  }

  p_fees() {
    this.router.navigate(['/fees-paid'])
  }

  make_payment() {
    this.router.navigate(['/pay-fees'])
  }

  ngOnInit() {
  }

}
