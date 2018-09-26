import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {DataService} from '../data.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
@Input() loginATester: string;
@Input() mdpATester: string;

  constructor(private dataService: DataService, 
              private router: Router) { }

  ngOnInit() {

  }

connexion() {
  for(let user of this.dataService.user){
    if(user.login === this.loginATester && user.mdp === this.mdpATester){
      this.router.navigate(['listing']);
    }
  }
}



}
