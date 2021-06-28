import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin:10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  // public auth!:Auth;

  get auth():Auth{
    return this.authServices.auth;
  }

  constructor(private router:Router,
              private authServices:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    // ir al Backend
    // un usuario

    this.router.navigate(['./auth']);

  }

}
