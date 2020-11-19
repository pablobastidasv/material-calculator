import MaterialResponse
  from "@/features/drywall_calculation/data/model/material-response";

const BASE_URL = `http://localhost:8080/material_calculator`;
// const BASE_URL = `https://us-central1-avalane-staging.cloudfunctions.net/MaterialCalculatorFunction`;

function getMaterialResponse(data) {
  return new MaterialResponse(
      data.angles,
      data.omegas_parals,
      data.principals,
      data.canals,
      data.screws,
      data.sheets,
      data.dust_putty,
      data.paint_keg,
      data.putty,
  );

}
export const calculateMaterial = (parameters) => {
  const wallType = parameters.job === "Double" ? "Double" : "Simple"
  const url = `${BASE_URL}?width=${parameters.width}&long=${parameters.long}&material=${parameters.material}&wall_type=${wallType}`

  return fetch(url)
    .then(res => res.json())
    .then(getMaterialResponse);
}
