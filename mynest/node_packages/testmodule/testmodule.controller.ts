import { Controller, Get } from '@nestjs/common';

@Controller('testmodule')
export class TestmoduleController {
    @Get()
    getHello(): string {
      return 'Hello from MyModule!';
    }
}
