import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photo: String = "https://cdn.xxl.thumbs.canstockphoto.com/glass-of-water-on-a-white-background-pictures_csp22607686.jpg";
  constructor() { }

  ngOnInit() {

  }

}
