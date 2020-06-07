import { Component, OnInit } from '@angular/core';
import { NgbModal,  } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  editing = {};
  rows = [];
  temp = [];
  selected = [];
  allFunctions = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  keySearch = '';

  closeResult: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEnter(e) {
    const val = e.target.value;
    // console.log(val);
    if (val != '') {
      this.router.navigate([`/result/${val}`])
    }
  }

  searchDiscussion() {
    if (this.keySearch != '') {
      this.router.navigate([`/result/${this.keySearch}`])
    }
  }

  

  


}