import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IForm } from '../homepage.component';

@Injectable()
export class NewFormService {

  private _handler: BehaviorSubject<IForm> = new BehaviorSubject(null);

  constructor() {
    console.log('new form service');
  }

  get handler$(): Observable<IForm> {
    return this._handler.asObservable();
  }
  dispatch(item: IForm): void {
    this._handler.next(item);
  }
}
