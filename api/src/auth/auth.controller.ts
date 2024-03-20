import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountDto } from "./dto/account.dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() account: AccountDto) {
    return await this.authService.signIn(account.username, account.password);
  }
}
