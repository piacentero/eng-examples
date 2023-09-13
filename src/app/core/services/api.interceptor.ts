import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _errorService: ErrorService,
    private _spinnerService: NgxSpinnerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._spinnerService.show();

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this._errorService.showError(err.error);
        return throwError(() => err);
      }),
      finalize(() => this._spinnerService.hide())
    );
  }
}
