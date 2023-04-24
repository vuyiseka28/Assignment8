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
  constructor(private router :Router){}
 username :string = '';
  password:string = '';

  getData() :void {
   /* let obj={
      name:this.username,
      pass:this.password
    }*/

    const existingUser = JSON.parse(localStorage.getItem('users') as string) || [];

      const userExists = existingUser.some((user: { username: string; }) => user.username === this.username);
      if (userExists) {
        this.router.navigate(['home'])
      alert('You logged in.');
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
