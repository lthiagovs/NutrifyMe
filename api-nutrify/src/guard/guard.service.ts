import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class GuardService implements CanActivate{
    constructor(private readonly authService: AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      
      // Agora o token é obtido diretamente dos parâmetros da URL
      const { token } = request.params;
      
      console.log('Token recebido da URL:', token);  // Log para verificar se o token foi obtido
  
      if (!token) {
        console.error('Token não encontrado na URL');
        return false;
      }
  
      // Verifica a validade do token
      return this.authService.checkToken(token);
    }
    

}
