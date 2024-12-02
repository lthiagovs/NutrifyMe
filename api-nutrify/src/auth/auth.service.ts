import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(id: string) {
    const payload = {sub: id}
    return this.jwtService.sign(payload);
  }

  async checkToken(token: string) {
    try {
      return this.jwtService.verify(token.replace("Bearer ", ""), {
        secret: process.env.JWT_SECRET,
      });
    } catch (err) {
      console.error('Token verification error:', err);
      return false;
    }
  }
}
