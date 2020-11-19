import MaterialData
  from "@/features/drywall_calculation/domain/entity/material-data";
import {calculateMaterial} from "@/features/drywall_calculation/data/repository/material-svc";

// noinspection JSUnfilteredForInLoop
class DrywallCalculator {
  async calculate(params) {
    const rawMaterials = await calculateMaterial(params);

    const materials = {};
    for (const name in rawMaterials) {
      const qty = rawMaterials[name];
      materials[name] = this.extractValuesFromRawResponse(qty, name);
    }
    return materials
  }

  extractValuesFromRawResponse(qty, name) {
    let unit = this.unitOf(name);
    return new MaterialData(qty, unit);
  }

  unitOf(name) {
    switch (name) {
      case "quantityOfDustPutty":
        return "Bultos"
      case "quantityOfPutty":
      case "quantityOfPaintKeg":
        return "Cuñete(s)"
      default: return "UND"
    }
  }
}

export default DrywallCalculator;
