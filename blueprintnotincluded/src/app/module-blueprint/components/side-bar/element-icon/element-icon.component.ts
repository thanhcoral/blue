import { Component, OnInit, Input } from '@angular/core';
import { DrawHelpers, BuildableElement } from '../../../../../../../blueprintnotincluded-lib/index';

@Component({
  selector: 'app-element-icon',
  templateUrl: './element-icon.component.html',
  styleUrls: ['./element-icon.component.css']
})
export class ElementIconComponent implements OnInit {

  @Input() element: BuildableElement;
  @Input() width: string;
  @Input() height: string;

  // TODO boolean in export
  get isIcon() { return !this.element.hasTag('Gas') && !this.element.hasTag('Liquid'); }
  get nullIcon() { return this.element.icon == null || this.element.icon == ''; }
  get isLiquid() { return this.element.hasTag('Liquid'); }
  get isGas() { return this.element.hasTag('Gas'); }
  get tint() { return DrawHelpers.colorToHex(this.element.uiColor); }
  get style() { return 'height: '+this.height+';' }


  constructor() { }

  ngOnInit() {
  }

}
