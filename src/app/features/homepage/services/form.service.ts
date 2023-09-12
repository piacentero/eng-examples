import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IForm } from '../homepage.component';

@Injectable()
export class FormService {

  private _handler: BehaviorSubject<IForm> = new BehaviorSubject(null);
  // private _handler: Subject<IForm> = new Subject<IForm>();

  constructor() { }

  get handler$(): Observable<IForm> {
    return this._handler.asObservable();
  }

  // getHandler$(): Observable<IForm> {
  //   return this._handler.asObservable();
  // }

  dispatch(item: IForm): void {
    this._handler.next(item);
  }
}
