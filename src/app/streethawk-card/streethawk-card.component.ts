import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-streethawk-card',
  templateUrl: './streethawk-card.component.html',
  styleUrls: ['./streethawk-card.component.scss']
})
export class StreethawkCardComponent implements OnInit {
  @Input() cardObjects: any;
  constructor() { }

  ngOnInit(): void {
  }

}
