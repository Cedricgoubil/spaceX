import { CrewDto } from './CrewDto';

export class UpcomingLaunchDto {
  fairings?: {
    reused: null;
    recovery_attempt: null;
    recovered: null;
    ships: []
  };
  links?: {
    patch: {
      small?: string;
      large?: string;
    };
    reddit: {
      campaign?: string;
      launch?: string;
      media?: string;
      recovery?: string;
    };
    flickr: {
      small: [];
      original: []
    };
    presskit?: string;
    webcast?: string;
    youtube_id?: string;
    article?: string;
    wikipedia?: string;
  };
  static_fire_date_utc?: Date | any;
  static_fire_date_unix?: Date | any;
  net?: false;
  window?: string;
  rocket?: string;
  success?: null;
  failures?: [];
  details?: string;
  crew?: CrewDto[];
  // ships?: []; New Dto
  // capsules?: []; New Dto
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
      core?: string;
      flight?: number;
      gridfins?: boolean;
      legs?: boolean;
      reused?: boolean;
      landing_attempt?: boolean;
      landing_success?: boolean;
      landing_type?: string;
      landpad?: string; // Not sure about type
    }
  ];
  auto_update?: boolean;
  tbd?: boolean;
  launch_library_id?: string;
  id?: string;
};

