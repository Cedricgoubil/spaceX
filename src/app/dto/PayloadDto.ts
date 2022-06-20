export class PayloadDto {
  dragon?: {
    capsule: string,
    mass_returned_kg: number,
    mass_returned_lbs: number,
    flight_time_sec: Date,
    manifest: string;
    water_landing: boolean,
    land_landing: boolean
  };

  name?: string;
  type?: string;
  reused?: boolean;
  launch?: string;
  customers?: string[];
  norad_ids?: number[];
  nationalities?: string[];
  manufacturers?: string[];
  mass_kg?: number;
  mass_lbs?: number;
  orbit?: string;
  reference_system?: string;
  regime?: string;
  longitude?: number;
  semi_major_axis_km?: number;
  eccentricity?: number;
  periapsis_km?: number;
  apoapsis_km?: number;
  inclination_deg?: number;
  period_min?: number;
  lifespan_years?: number;
  epoch?: Date;
  mean_motion?: number;
  raan?: number;
  arg_of_pericenter?: number;
  mean_anomaly?: number;
  id?: string;
}