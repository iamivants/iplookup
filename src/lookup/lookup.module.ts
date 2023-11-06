import { Module } from '@nestjs/common';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';
import { RedisModule } from '@nestjs-modules/ioredis';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [RedisModule, HttpModule],
  controllers: [LookupController],
  providers: [LookupService],
})
export class LookupModule {}
