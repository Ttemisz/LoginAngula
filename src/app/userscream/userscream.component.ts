import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userscream',
  templateUrl: './userscream.component.html',
  styleUrls: ['./userscream.component.css']
})
export class UserscreamComponent implements OnInit {
  username: string = '';

  constructor() { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username') || 'Desconhecido';
 
  }

}