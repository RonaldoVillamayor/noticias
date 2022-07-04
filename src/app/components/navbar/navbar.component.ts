import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() titulo: string;
 
  constructor() {
    this.titulo = '';
   }

  ngOnInit(): void {
  }

}
