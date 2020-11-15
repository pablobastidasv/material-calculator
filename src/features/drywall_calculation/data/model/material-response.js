class MaterialResponse {
  constructor(
      number_of_angles,
      number_of_omegas,
      number_of_principals,
      number_of_screws,
      number_of_sheets,
      quantity_of_dust_putty,
      quantity_of_paint_keg,
      quantity_of_putty,
  ) {
    this.numberOfAngles = number_of_angles;
    this.numberOfOmegas = number_of_omegas;
    this.numberOfPrincipals = number_of_principals;
    this.numberOfScrews = number_of_screws;
    this.numberOfSheets = number_of_sheets;
    this.quantityOfDustPutty = quantity_of_dust_putty;
    this.quantityOfPaintKeg = quantity_of_paint_keg;
    this.quantityOfPutty = quantity_of_putty;
  }
}

export default MaterialResponse;
