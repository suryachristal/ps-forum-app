import { Component } from '@angular/core';

export class Student{
  name: string;
  id: number;
  emailid: string;
}

var studArray : Student[] =[
{name:"Mr.Sanjay", id:1001, emailid:"sanjay@gmail.com"},
{name:"Mr.Guru", id:1002, emailid:"guru@gmail.com"},
{name:"Mr.Morris", id:1001, emailid:"moris@gmail.com"}
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'FORUM';
  name='';
  students= studArray;
  
}
