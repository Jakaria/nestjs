import { Module } from '@nestjs/common';
import { TestmoduleController } from './testmodule.controller';

@Module({
  controllers: [TestmoduleController]
})
export class TestmoduleModule {}
