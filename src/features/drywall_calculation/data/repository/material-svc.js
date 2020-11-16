import MaterialResponse
  from "@/features/drywall_calculation/data/model/material-response";

// const BASE_URL = `http://localhost:8080/material_calculator`;
const BASE_URL = `https://us-central1-avalane-staging.cloudfunctions.net/MaterialCalculatorFunction`;

function getMaterialResponse(data) {
  return new MaterialResponse(
      data.number_of_angles,
      data.number_of_omegas,
      data.number_of_principals,
      data.number_of_canals,
      data.number_of_screws,
      data.number_of_sheets,
      data.quantity_of_dust_putty,
      data.quantity_of_paint_keg,
      data.quantity_of_putty,
  );

}
export const calculateMaterial = (parameters) => {
  const wallType = parameters.job === "Double" ? "Double" : "Simple"
  const url = `${BASE_URL}?width=${parameters.width}&long=${parameters.long}&material=${parameters.material}&wall_type=${wallType}`

  return fetch(url)
    .then(res => res.json())
    .then(getMaterialResponse);
}
