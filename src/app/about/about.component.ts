import {Component,OnInit} from '@angular/core';
import {SEOService} from '../seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SEOService) {
  }

  ngOnInit(): void {
    this.seoUpdate();
  }

  seoUpdate(): void  {
    this.seoService.updateTitle('About Page');
    this.seoService.updateDescription('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s');
    this.seoService.updateUrl();
    this.seoService.updateImage('https://nodetest.newegyptgroup.com/assets/logo5.jpg');
  }

}
