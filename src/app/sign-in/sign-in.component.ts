import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  Gotohome(){
    this.router.navigate(['home']);
  }

}
