import { Injectable, Logger } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import axios from 'axios';
import { LookupInfoDto } from 'src/dto/ip-info.dto';

@Injectable()
export class LookupService {
  private readonly logger = new Logger(LookupService.name);

  constructor(@InjectRedis() private readonly redis: Redis) {}

  async lookupInfo(ip: string): Promise<LookupInfoDto> {
    const cacheKey = `lookup:${ip}`;
    try {
      const cachedData = await this.redis.get(cacheKey);

      if (cachedData) {
        return JSON.parse(cachedData);
      }

      const response = await axios.get(`http://ipwhois.app/json/${ip}`);
      const data = response.data;
      await this.setlookupInfoWithTTL(ip, data);

      return data;
    } catch (error) {
      this.logger.error(
        `Error occurred while fetching IP details for ${ip}: ${error.message}`,
        error.stack,
      );
      throw new Error(`Error fetching IP details for ${ip}.`);
    }
  }

  async removeCachedLookupInfo(ip: string): Promise<void> {
    const cacheKey = `lookup:${ip}`;
    try {
      await this.redis.del(cacheKey);
    } catch (error) {
      this.logger.error(
        `Error occurred while removing cached data for ${ip}: ${error.message}`,
        error.stack,
      );
      throw new Error(`Error removing IP ${ip} from cache.`);
    }
  }

  private async setlookupInfoWithTTL(
    ip: string,
    data: LookupInfoDto,
  ): Promise<void> {
    const cacheKey = `lookup:${ip}`;
    const value = JSON.stringify(data);
    try {
      await this.redis.setex(cacheKey, 60, value);
    } catch (error) {
      this.logger.error(
        `Error occurred while setting cache for ${ip}: ${error.message}`,
        error.stack,
      );
    }
  }
}
