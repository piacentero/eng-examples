import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { IForm } from '../../homepage.component';
import { FormService } from '../../services/form.service';
import { filter, Observable, Subscription, switchMap, tap, toArray } from 'rxjs';

@Component({
  selector: 'ecf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  // @Input() list: IForm[];
  list: IForm[] = [];

  @Output() delete: EventEmitter<number> = new EventEmitter()

  handler$: Observable<IForm>;

  constructor(
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    this.handler$ = this._formService.handler$.pipe(
      filter(item => !!item),
      tap(item => this.list.push(item))
    );
  }

  ngOnDestroy(): void {
  }

  onDelete(index: number): void {
    this.delete.emit(index);
  }

}
