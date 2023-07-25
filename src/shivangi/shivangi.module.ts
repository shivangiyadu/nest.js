import { Module } from '@nestjs/common';
import { ShivangiController } from './shivangi.controller';
import { ShivangiService } from './shivangi.service';

@Module({
  controllers: [ShivangiController],
  providers: [ShivangiService]
})
export class ShivangiModule {}
