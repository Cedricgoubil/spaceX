export class LaunchDto {
  id?: string;
  flight_number?: number;
  name?: string;
  details?: string;
  crew?: string[];
  ships?: string[];
  capsules?: string[];
  payloads?: string[];
  date_utc?: Date | any;
  date_unix?: Date | any;
  date_local?: Date | any;
  date_precision?: Date | any;
  upcoming?: boolean;
  rocket?: string;
  success?: boolean;
  failures?: [
    {
      time?: number,
      altitude?: number,
      reason?: string;
    }
  ];
  links?: {
    patch?: {
      small: string,
      large: string,
    },
    flickr?: {
      small: string[],
      original: string[]
    },
  }
}