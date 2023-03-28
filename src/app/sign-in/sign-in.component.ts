import {Component, OnInit} from '@angular/core';
import {AuthloginServiceService} from "../authlogin.service.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  constructor(public AuthloginServiceService: AuthloginServiceService) {
  }
ngOnInit() {
}
}
