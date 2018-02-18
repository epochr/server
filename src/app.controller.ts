import { Get, Controller, Req } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(@Req() request: Request): string {
    console.log(request.method)
    return 'Hello World!';
  }
}
