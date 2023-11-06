import { ApiProperty } from '@nestjs/swagger';

export class LookupInfoDto {
  @ApiProperty()
  ip: string;
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  type: string;
  @ApiProperty()
  continent: string;
  @ApiProperty()
  continent_code: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  country_code: string;
  @ApiProperty()
  country_flag: string;
  @ApiProperty()
  country_capital: string;
  @ApiProperty()
  country_phone: string;
  @ApiProperty()
  country_neighbours: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  latitude: number;
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  asn: string;
  @ApiProperty()
  org: string;
  @ApiProperty()
  isp: string;
  @ApiProperty()
  timezone: string;
  @ApiProperty()
  timezone_name: string;
  @ApiProperty()
  timezone_dstOffset: number;
  @ApiProperty()
  timezone_gmtOffset: number;
  @ApiProperty()
  timezone_gmt: string;
  @ApiProperty()
  currency: string;
  @ApiProperty()
  currency_code: string;
  @ApiProperty()
  currency_symbol: string;
  @ApiProperty()
  currency_rates: number;
  @ApiProperty()
  currency_plural: string;
}
