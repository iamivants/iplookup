import { Module } from '@nestjs/common';
import { LookupModule } from './lookup/lookup.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    LookupModule,
    RedisModule.forRootAsync({
      imports: [ConfigModule], // Make sure ConfigModule is imported
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        config: {
          host: configService.get('REDIS_HOST') || 'localhost', // Default to 'localhost' if not set
          port: configService.get<number>('REDIS_PORT') || 6379, // Default to 6379 if not set
        },
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
