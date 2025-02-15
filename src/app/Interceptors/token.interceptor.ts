import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);

  if (authService.hasToken()) {
    try {
      const storedUser = tokenService.getToken('user');
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser?.token) {
        const authRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${parsedUser.token}`),
        });
        return next(authRequest);
      }
    } catch (err) {
      console.error('Erro ao processar o token:', err);
      return next(req);
    }
  }

  return next(req);
};