import { BlueprintService } from '../../services/blueprint-service';
import { BlueprintItem, CameraService, OniItem, BuildableElement } from '../../../../../../blueprintnotincluded-lib/index'

export class SameItemCollection
{
  private selected_: boolean;
  get selected() {return this.selected_;}
  set selected(value: boolean) {
    this.selected_ = value;
    this.setSelection();
    if (this.selected_) {
      CameraService.cameraService.resetSinWave();
      CameraService.cameraService.setOverlayForItem(this.oniItem);
      this.observersSelected.map((observer) => { observer.selected(); })
    }
  }

  oniItem: OniItem;
  items: BlueprintItem[];
  nbElements: number[];
  temperatureWarning: boolean;

  constructor(oniItem: OniItem) {
    this.oniItem = oniItem;
    this.items = [];
    this.nbElements = [];
    for (let indexElement = 0; indexElement < this.oniItem.buildableElementsArray.length; indexElement++)
      this.nbElements[indexElement] = 0;

    this.temperatureWarning = false;

    this.observersSelected = [];
  }

  get header() { return this.items[0].header; }

  addItem(blueprintItem: BlueprintItem) {
    // We need to test if the item was already added to this collection, (some items are bigger than one tile)
    if (this.items.indexOf(blueprintItem) == -1) {
      this.items.push(blueprintItem);

      this.updateNbElements();
      this.updateTemperatureWarning();
    }
  }

  updateNbElements() {
    for (let indexElement = 0; indexElement < this.oniItem.buildableElementsArray.length; indexElement++) {
      let elements: BuildableElement[] = [];
      
      for (let item of this.items)
        if (elements.indexOf(item.buildableElements[indexElement]) == -1)
          elements.push(item.buildableElements[indexElement]);
        
      this.nbElements[indexElement] = elements.length;
    }
  }

  updateTemperatureWarning() {
    let firstTemperature = null;
    this.temperatureWarning = false;

    for (let item of this.items)
      if (firstTemperature == null) firstTemperature = item.temperature;
      else if (item.temperature != firstTemperature) this.temperatureWarning = true;
  }

  setSelection() {
    for (let item of this.items) {
      item.selected = this.selected_;
    }
  }

  destroyAll() {
    for (let item of this.items)
      BlueprintService.blueprintService.blueprint.destroyBlueprintItem(item);
  }

  private observersSelected: IObsSelected[];
  public subscribeSelected(observer: IObsSelected) {
    this.observersSelected.push(observer);
  }
}

export interface IObsSelected {
  selected();
}