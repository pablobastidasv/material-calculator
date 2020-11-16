import MaterialData from "@/features/drywall_calculation/domain/entity/material-data";
import {calculateMaterial} from "@/features/drywall_calculation/data/repository/material-svc";

// noinspection JSUnfilteredForInLoop
class DrywallCalculator {
  async calculate(params) {
    const rawMaterials = await calculateMaterial(params);

    const materials = [];
    for (const name in rawMaterials) {
      const material = this.extractValuesFromRawResponse(rawMaterials, name);
      if(material.value){
        materials.push(material);
      }
    }
    return materials
  }

  extractValuesFromRawResponse(rawMaterials, name) {
    let qty = rawMaterials[name];
    let unit = this.unitOf(name);
    return new MaterialData(name, qty, unit);
  }

  unitOf(name) {
    switch (name) {
      case "quantityOfDustPutty":
      case "quantityOfPutty":
        return "Kg"
      case "quantityOfPaintKeg":
        return "Cuñete(s)"
      default: return "UND"
    }
  }
}

export default DrywallCalculator;
