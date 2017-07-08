import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  selected = {title: 'app1', category: "utitlits"};
  options = [
    {title: 'app1', category: "utitlits"},
    {title: 'app2', category: "social network"},
    {title: 'Call of dutty', category: "game"},
  ];

  ngOnInit() {
    
  }
}
