import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    const requiredRole: string = route.data['role'];
    const userRole: string = this.authService.getUserRole();

    if (this.isAuthorized(userRole, requiredRole)) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

  private isAuthorized(userRole: string, requiredRole: string): boolean {
    const roleHierarchy: Record<string, string[]> = {
      'client': ['client'],
      'manager': ['manager', 'client'],
    };

    return roleHierarchy[userRole]?.includes(requiredRole) ?? false;
  }
}