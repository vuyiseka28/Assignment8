import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Name: string = '';
  Surname: string = '';
  Password: string = '';
  ConfirmPassword: string = '';
  Gender: string = '';
  Email: string = '';
  Phone: string = '';
  Question: string = '';
  Answer: string = '';
  registerUser: any = [];

  constructor() {}

  ngOnInit(): void {
    const questions = ['What is your nickname?', 'When is your birthday?'];
  }

  register() {
    const user = {
      Name: this.Name,
      Surname: this.Surname,
      Password: this.Password,
      ConfirmPassword: this.ConfirmPassword,
      Gender: this.Gender,
      Email: this.Email,
      Phone: this.Phone,
      Question: this.Question,
      Answer: this.Answer,
    };
  
    const registeredUsers = JSON.parse(localStorage.getItem('register') || '[]');
    const existingUser = registeredUsers.find(
      (registeredUser: any) => registeredUser.Email === this.Email
    );
  
    if (!this.Name || !this.Surname || !this.Password || !this.ConfirmPassword || !this.Email || !this.Phone || !this.Question || !this.Answer) {
      alert('Please fill in all required fields');
    } else if (existingUser) {
      alert('The user already exists');
    } else {
      registeredUsers.push(user);
      localStorage.setItem('register', JSON.stringify(registeredUsers));
      alert('User Registered Successfully');
    }
  }
}
  
  
  
  
  









