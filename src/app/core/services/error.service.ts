import { Injectable } from '@angular/core';

export interface IError {}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  showError(error: IError): void {
    console.log('error', error);
  }
}
