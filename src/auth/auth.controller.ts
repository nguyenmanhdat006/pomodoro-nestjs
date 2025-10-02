/* eslint-disable */

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  //inject instance of auth service
  constructor(private authSerice: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.authSerice.register(createUserDto);
  }
}
