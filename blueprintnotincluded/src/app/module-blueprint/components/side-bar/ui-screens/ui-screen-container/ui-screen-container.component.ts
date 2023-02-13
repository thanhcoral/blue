import { Component, OnInit, Input } from '@angular/core';
import { BlueprintItem } from '../../../../../../../../blueprintnotincluded-lib/index';

@Component({
  selector: 'app-ui-screen-container',
  templateUrl: './ui-screen-container.component.html',
  styleUrls: ['./ui-screen-container.component.css']
})
export class UiScreenContainerComponent implements OnInit {

  @Input() blueprintItem: BlueprintItem;

  get showSettings() { return this.blueprintItem.oniItem.uiScreens.length > 0; }
  get uiScreens() { return this.blueprintItem.oniItem.uiScreens; }

  constructor() { }

  ngOnInit() {
  }

}
