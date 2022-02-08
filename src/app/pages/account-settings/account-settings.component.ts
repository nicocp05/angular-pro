import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.getElementById('theme');

  constructor() { }

  ngOnInit(): void {
  }

  public changeTheme( theme: string = 'default-dark' ) {

    const url = `./assets/css/colors/${ theme }.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

  }

}
