import { Module } from '@nestjs/common';
import { user4Controller } from './user4.controller';

@Module({
  controllers: [user4Controller]
})
export class user4Module {}