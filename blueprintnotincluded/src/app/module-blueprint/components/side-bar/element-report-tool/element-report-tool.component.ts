import { Component, OnInit } from '@angular/core';
import { ToolService } from 'src/app/module-blueprint/services/tool-service';
import { CameraService, Visualization, BuildableElement } from '../../../../../../../blueprintnotincluded-lib/index';

@Component({
  selector: 'app-element-report-tool',
  templateUrl: './element-report-tool.component.html',
  styleUrls: ['./element-report-tool.component.css']
})
export class ElementReportToolComponent implements OnInit {

  get data() { return this.toolService.elementReport.data }

  private cameraService: CameraService

  constructor(private toolService: ToolService) {
    this.cameraService = CameraService.cameraService;
  }

  selectEveryElement(buildableElement: BuildableElement) {
    this.toolService.selectTool.selectEveryElement(buildableElement);
  }

  ngOnInit() {
  }

  close() {
    this.cameraService.visualization = Visualization.none;
  }
}
