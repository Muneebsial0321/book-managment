import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Authentication } from './auth.interface';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AuthService implements Authentication {
  constructor(private readonly db: DbService) { }

  async signInByLocal(name: string, email: string, password: string): Promise<{ success: boolean; user: any; }> {
    return { success: true, user: {} }

  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: any; }> {
    return { success: true, user: {} }
  }
async validate(token: string): Promise<{ success: boolean; userId?: string; }> {
  console.log({token})
   return { success: true, userId: "string" }
}

async logout(userId: string): Promise<void> {
  console.log({userId})
}
}