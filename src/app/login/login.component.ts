import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(public router :Router){}
  username :string = '';
  password:string = '';

  login() :void {
   

    const existingUser = JSON.parse(localStorage.getItem('users') as string) || [];

      const userExists = existingUser.find((user:any ) => user.username === this.username);
      if (userExists) {
      
      alert('You logged in.');
      this.router.navigate(['home'])
      return;
     }else
     {
      alert('User does not exist');
      this.router.navigate(['register'])
     }
      //const newUser = { username: this.username, password: this.password };
     // existingUser.push(newUser);
    //localStorage.setItem('users', JSON.stringify(existingUser));

  }
}
