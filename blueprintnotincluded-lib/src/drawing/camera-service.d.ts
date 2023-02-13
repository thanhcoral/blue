import { Vector2 } from '../vector2';
import { Overlay } from '../enums/overlay';
import { Display } from '../enums/display';
import { Visualization } from '../enums/visualization';
import { OniItem } from '../oni-item';
export declare class CameraService {
    targetCameraOffset: Vector2;
    cameraOffset: Vector2;
    currentZoom: number;
    private overlay_;
    overlay: Overlay;
    private display_;
    display: Display;
    private visualization_;
    visualization: Visualization;
    readonly showElementReport: boolean;
    readonly showTemperatureScale: boolean;
    spinner: number;
    private sinWaveTime;
    sinWave: number;
    private targetZoom;
    private lastZoomCenter;
    triggerSortChildren: boolean;
    container: any;
    addToContainer(child: any): void;
    private static cameraService_;
    static readonly cameraService: CameraService;
    constructor(container: any);
    observersCameraChange: IObsCameraChanged[];
    subscribeCameraChange(observer: IObsCameraChanged): void;
    observersToAnimationChange: IObsAnimationChanged[];
    subscribeAnimationChange(observer: IObsAnimationChanged): void;
    setOverlayForItem(item: OniItem): void;
    updateZoom(): void;
    resetSinWave(): void;
    updateAnimations(deltaTime: number): void;
    updateSinWave(deltaTime: number): void;
    updateSpinner(deltaTime: number): void;
    linearReset: number;
    updateLinearReset(deltaTime: number): void;
    resetZoom(canvasSize: Vector2): void;
    zoomLevels: number[];
    private currentZoomIndex;
    zoom(delta: number, zoomCenter: Vector2): void;
    setHardZoom(zoomLevel: number): void;
    changeZoom(zoomDelta: number, zoomCenter: Vector2): void;
    getTileCoordsForZoom(screenCoords: Vector2): Vector2;
    getTileCoords(cursorPosition: Vector2): Vector2;
}
export interface IObsCameraChanged {
    cameraChanged(camera: CameraService): void;
}
export interface IObsAnimationChanged {
    animationChanged(): void;
}
//# sourceMappingURL=camera-service.d.ts.map