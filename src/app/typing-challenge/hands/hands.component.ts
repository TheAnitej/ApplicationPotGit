import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css']
})
export class HandsComponent implements OnInit {
@Input() one: boolean = false;
@Input() two: boolean = false;
@Input() three: boolean = false;
@Input() four: boolean = false;
@Input() five: boolean = false;
@Input() six: boolean = false;
@Input() seven: boolean = false;
@Input() eight: boolean = false;
@Input() nine: boolean = false;
@Input() ten: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

 

}
