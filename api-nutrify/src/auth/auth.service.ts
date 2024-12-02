import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(id: string) {
    const payload = {sub: id}
    return this.jwtService.sign(payload, { secret: 'nutrifyme', expiresIn: '30s' });
  }

  async checkToken(token: string) {
    try {
      console.log('Token recebido:', token); // Log para verificar o valor do token
  
      if (!token) {
        console.error('Token é indefinido ou nulo');
        return false; // Retorna false se o token for indefinido
      }
  
      // Verifique se o token começa com "Bearer " antes de tentar removê-lo
      if (!token.startsWith('Bearer ')) {
        console.error('Token não contém o prefixo "Bearer "');
        return false; // Retorna false se o token não tiver o prefixo correto
      }
  
      const decoded = this.jwtService.verify(token.replace('Bearer ', ''), { secret: 'nutrifyme' });
      console.log('Token válido:', decoded);
      return true;
    } catch (err) {
      console.error('Erro ao verificar o token:', err);
      return false;
    }
  }
  
}
