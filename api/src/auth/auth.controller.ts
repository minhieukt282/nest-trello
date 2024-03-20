import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountDto } from "./dto/account.dto";
import { Public } from "./decorate/auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Public()
  @Post('login')
  async signIn(@Body() account: AccountDto) {
    return await this.authService.signIn(account.username, account.password);
  }
}
