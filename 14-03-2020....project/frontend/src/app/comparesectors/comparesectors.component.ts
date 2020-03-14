import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comparesectors',
  templateUrl: './comparesectors.component.html',
  styleUrls: ['./comparesectors.component.css']
})
export class ComparesectorsComponent implements OnInit {
  comparesector:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
