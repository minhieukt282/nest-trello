import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/users.entity";
import { UsersService } from "../users/users.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../_constants/jwt.constant";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService]
})
export class AuthModule {
}
