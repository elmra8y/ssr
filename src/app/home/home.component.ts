import {Component, OnInit} from '@angular/core';
import {SEOService} from '../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private seoService: SEOService) {
  }

  ngOnInit(): void {
    this.seoUpdate();
  }

  seoUpdate(): void  {
    this.seoService.updateTitle('Home Page');
    this.seoService.updateDescription('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s');
    this.seoService.updateUrl();
    this.seoService.updateImage('https://nodetest.newegyptgroup.com/assets/logo4.jpg');
  }

}
