import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestmoduleModule } from '../node_packages/testmodule/testmodule.module';

@Module({
  imports: [TestmoduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
