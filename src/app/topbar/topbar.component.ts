import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  appVersion: string = "";


  constructor() { }

  ngOnInit(): void {
    this.appVersion = environment.appVersion;
  }

}
