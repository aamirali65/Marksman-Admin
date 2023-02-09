import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toogle_menu(){
    $('.sidebar, .content').toggleClass("open")
  }

 
 
}
