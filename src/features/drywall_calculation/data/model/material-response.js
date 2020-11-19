class MaterialResponse {
  constructor(
      number_of_angles,
      number_of_omegas,
      number_of_principals,
      number_of_canals,
      number_of_screws,
      number_of_sheets,
      quantity_of_dust_putty,
      quantity_of_paint_keg,
      quantity_of_putty,
  ) {
    this.angles = number_of_angles;
    this.omegas_parals = number_of_omegas;
    this.principals = number_of_principals;
    this.canals = number_of_canals;
    this.screws = number_of_screws;
    this.sheets = number_of_sheets;
    this.dust_putty = quantity_of_dust_putty;
    this.paint_keg = quantity_of_paint_keg;
    this.putty = quantity_of_putty;
  }
}

export default MaterialResponse;
