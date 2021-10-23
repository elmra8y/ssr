import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class SEOService {
  constructor(private title: Title, private meta: Meta, @Inject(DOCUMENT) private doc) {
  }

  updateTitle(title: string): void {
    title = title.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 40);
    this.title.setTitle(title);
    this.meta.updateTag({name: 'title', content: title});
    this.meta.updateTag({property: 'og:title', content: title});
    this.meta.updateTag({name: 'twitter:title', content: title});
  }

  updateDescription(desc: string): void {
    desc = desc.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 110);
    this.meta.updateTag({name: 'description', content: desc});
    this.meta.updateTag({property: 'og:description', content: desc});
    this.meta.updateTag({name: 'twitter:description', content: desc});
  }

  updateUrl(url = this.doc.location.href): void {
    this.meta.updateTag({property: 'og:url', content: url + '/'});
    this.meta.updateTag({name: 'twitter:url', content: url + '/'});
    this.meta.updateTag({name: 'canonical_tag', content: url + '/'});
    this.updateCanonicalURL(url);
  }

  updateImage(image = 'https://nodetest.newegyptgroup.com/assets/d.jpg'): void {
    this.meta.updateTag({property: 'og:image', content: image});
    this.meta.updateTag({name: 'twitter:image', content: image});
  }

  updateCanonicalURL(url: string): void {
    const canonicalLink = this.doc.getElementById('canonical');
    canonicalLink.setAttribute('href', url + '/');
  }
}

