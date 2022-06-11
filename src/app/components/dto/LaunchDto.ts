export class LaunchDto {
  id?: string | any;

  fairings?: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };

  links?: {
    patch?: {
      small: string,
      large: string,
    },
    reddit?: {
      campaign: string;
      launch: string;
      media: string;
      recovery: string;
    },
    flickr?: {
      small: string[],
      original: string[]
    },

    presskit?: string;
    webcast?: string;
    youtube_id?: string;
    article?: string;
    wikipedia?: string;
  };

  static_fire_date_utc?: Date | any;
  static_fire_date_unix?: Date | any;
  net?: boolean;
  window?: number;
  rocket?: string;
  success?: boolean;

  failures?: [
    {
      time?: number;
      altitude?: number;
      reason?: string;
    }
  ];

  details?: string;
  crew?: string[] | any;
  ships?: string[];
  capsules?: string[];
  payloads?: string[];

  launchpad?: string;
  flight_number?: number;
  name?: string;
  date_utc?: Date | any;
  date_unix?: Date | any;
  date_local?: Date | any;
  date_precision?: Date | any;
  upcoming?: boolean;

  cores?: [
    {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: boolean;
      landing_type: string;
      landpad: string;
    }
  ];

  auto_update?: boolean;
  tbd?: boolean;
  launch_library_id?: string;
}


