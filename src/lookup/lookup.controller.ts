import {
  Controller,
  Get,
  Delete,
  Param,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { LookupService } from './lookup.service';
import { LookupInfoDto } from 'src/dto/ip-info.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ip-lookup')
@Controller('lookup')
export class LookupController {
  constructor(private readonly lookupService: LookupService) {}

  @Get(':ip')
  @ApiResponse({
    status: 200,
    description: 'Return IP lookup information.',
    type: LookupInfoDto,
  })
  @ApiResponse({ status: 404, description: 'Information for IP not found.' })
  async lookupInfo(@Param('ip') ip: string): Promise<LookupInfoDto> {
    const lookupInfo = await this.lookupService.lookupInfo(ip);
    if (!lookupInfo) {
      throw new NotFoundException(`Lookup information for IP ${ip} not found.`);
    }
    return lookupInfo;
  }

  @Delete(':ip')
  @HttpCode(204)
  @ApiResponse({
    status: 204,
    description: 'Cached IP lookup information removed.',
  })
  async removeCachedLookupInfo(
    @Param('ip') ip: string,
  ): Promise<{ message: string }> {
    await this.lookupService.removeCachedLookupInfo(ip);
    return { message: `Cached information for IP ${ip} has been removed.` };
  }
}
