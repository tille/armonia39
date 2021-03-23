import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-armonia39';
  image_index = 0;

  //https://picsum.photos/2000/600?random&t=${Math.random()}
  images = [
    '../assets/images/home-1.jpg',
    '../assets/images/home-2.jpg',
    '../assets/images/home-3.jpg'
  ];

  sliderStep(stepUp: boolean) {
    if (stepUp) {
      this.image_index = (this.image_index + 1) % 3;
    } else {
      this.image_index = ((this.image_index - 1) + 3) % 3;
    }
  }

  constructor(private httpClient: HttpClient) {
      interval(6000).subscribe(x => this.sliderStep(true));
  }

  ngOnInit() {}
}
