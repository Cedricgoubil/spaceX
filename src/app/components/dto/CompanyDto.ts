export class CompanyDto {
  headquarters?: {
    address: string,
    city: string,
    state: string,
  };

  links?: {
    website: string,
    flickr: string,
    twitter: string,
    elon_twitter: string,
  };

  name?: string;
  founder?: string;
  founded?: Date;
  employees?: number;
  vehicles?: number;
  launch_sites?: number;
  test_sites?: number;
  ceo?: string;
  cto?: string;
  coo?: string;
  cto_propulsion?: string;
  valuation?: number;
  summary?: string;
  id?: string;
}