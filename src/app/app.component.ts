import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  selected = {title: 'app1', category: 'utitlits'};
  options = [
    {title: 'app1', category: 'utitlits'},
    {title: 'app2', category: 'social network'},
    {title: 'Call of dutty', category: 'game'},
    {title: 'Call of dutty1', category: 'game1'},
    {title: 'Call of dutty2', category: 'game'},
    {title: 'Call of dutty3', category: 'game'},
    {title: 'Call of dutty4', category: 'game'},
    {title: 'Call of dutty5', category: 'game'},
    {title: 'Call of dutty6', category: 'game'},
  ];

  click() {
    this.options
    console.log(555);
  }

  ngOnInit() {

  }
}
