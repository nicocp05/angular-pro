import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public linkTheme = document.getElementById('theme');

  constructor() { }

  ngOnInit(): void {

    const url = localStorage.getItem('theme') || '/assets/css/colors/purple-dark.css';

    this.linkTheme?.setAttribute('href', url);
  }

}
