"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildLocationRule;
(function (BuildLocationRule) {
    BuildLocationRule[BuildLocationRule["Anywhere"] = 0] = "Anywhere";
    BuildLocationRule[BuildLocationRule["OnFloor"] = 1] = "OnFloor";
    BuildLocationRule[BuildLocationRule["OnFloorOverSpace"] = 2] = "OnFloorOverSpace";
    BuildLocationRule[BuildLocationRule["OnCeiling"] = 3] = "OnCeiling";
    BuildLocationRule[BuildLocationRule["OnWall"] = 4] = "OnWall";
    BuildLocationRule[BuildLocationRule["InCorner"] = 5] = "InCorner";
    BuildLocationRule[BuildLocationRule["Tile"] = 6] = "Tile";
    BuildLocationRule[BuildLocationRule["NotInTiles"] = 7] = "NotInTiles";
    BuildLocationRule[BuildLocationRule["Conduit"] = 8] = "Conduit";
    BuildLocationRule[BuildLocationRule["LogicBridge"] = 9] = "LogicBridge";
    BuildLocationRule[BuildLocationRule["WireBridge"] = 10] = "WireBridge";
    BuildLocationRule[BuildLocationRule["HighWattBridgeTile"] = 11] = "HighWattBridgeTile";
    BuildLocationRule[BuildLocationRule["BuildingAttachPoint"] = 12] = "BuildingAttachPoint";
    BuildLocationRule[BuildLocationRule["OnFloorOrBuildingAttachPoint"] = 13] = "OnFloorOrBuildingAttachPoint";
    BuildLocationRule[BuildLocationRule["OnFoundationRotatable"] = 14] = "OnFoundationRotatable";
})(BuildLocationRule = exports.BuildLocationRule || (exports.BuildLocationRule = {}));
