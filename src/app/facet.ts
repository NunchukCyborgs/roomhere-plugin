export class Facet {
  public min_price: number = 0;
  public max_price: number = 25000;
  public min_bedrooms: number = 1;
  public min_bathrooms: number = 1;
  public max_lease_length: number = null;
  public locations: any[] = [];
  public amenities: any[] = [];
  public types: string[] = [];
}
