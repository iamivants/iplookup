import {
  Controller,
  Get,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { LookupService } from './lookup.service';
import { LookupInfoDto } from 'src/dto/ip-info.dto';

@Controller('')
export class LookupController {
  constructor(private readonly lookupService: LookupService) {}

  @Get(':ip')
  async lookupInfo(@Param('ip') ip: string): Promise<LookupInfoDto> {
    const lookupInfo = await this.lookupService.lookupInfo(ip);
    if (!lookupInfo) {
      throw new NotFoundException(`Lookup information for IP ${ip} not found.`);
    }
    return lookupInfo;
  }

  @Delete(':ip')
  async removeCachedLookupInfo(
    @Param('ip') ip: string,
  ): Promise<{ message: string }> {
    await this.lookupService.removeCachedLookupInfo(ip);
    return { message: `Cached information for IP ${ip} has been removed.` };
  }
}
