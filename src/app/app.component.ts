import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StreetHawk';
  cardObjects = [{
    length: "34",
    icon: "../../assets/images/android-64x64.png",
    expireDate: '10.11.21',
    color: "success"
  },
  {
    length: "...",
    icon: "../../assets/images/table-30.png",
    expireDate: '10.11.21',
    color: "pending"
  },
  {
    length: "...",
    icon: "../../assets/images/apple-logo-24.png",
    expireDate: '10.11.21',
    color: "disabled"
  },
  ]
}
