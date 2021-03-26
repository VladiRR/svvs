import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

import {IAuthStorage} from '../interfaces/auth-storage.interface'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authStorage: IAuthStorage) {
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authStorage.getAccessToken()

    if (accessToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      })
    }
    return next.handle(req)
  }
}
