import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class GuardService implements CanActivate{
    constructor(private readonly authService: AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const { authorization } = context.switchToHttp().getRequest().headers;

        return this.authService.checkToken(authorization ?? "");
        
    }

}
