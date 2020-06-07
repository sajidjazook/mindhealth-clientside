import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { Location } from '@angular/common';


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
private _router: Subscription;

constructor(private renderer: Renderer, private router: Router, @Inject(DOCUMENT) private document: any, private element: ElementRef, public location: Location) { }
@HostListener('window:scroll', ['$event'])
hasScrolled() {

    var st = window.pageYOffset;
   
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    var navbar = document.getElementsByTagName('nav')[0];

    
    if (st > lastScrollTop && st > navbarHeight) {
       
        if (navbar.classList.contains('headroom--pinned')) {
            navbar.classList.remove('headroom--pinned');
            navbar.classList.add('headroom--unpinned');
        }
        
    } else {
       
        if (st + window.innerHeight < document.body.scrollHeight) {
            
            if (navbar.classList.contains('headroom--unpinned')) {
                navbar.classList.remove('headroom--unpinned');
                navbar.classList.add('headroom--pinned');
            }
        }
    }

    lastScrollTop = st;
};
ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
        } else {
            window.document.activeElement.scrollTop = 0;
        }
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 200 || window.pageYOffset > 200) {
                // add logic
                navbar.classList.add('headroom--not-top');
            } else {
                // remove logic
                navbar.classList.remove('headroom--not-top');
            }
        });
    });
    this.hasScrolled();

    // this.showToast()
}
}
