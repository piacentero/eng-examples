import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { IForm } from '../../homepage.component';
import { FormService } from '../../services/form.service';
import { filter, map, Observable, Subscription, switchMap, tap, toArray } from 'rxjs';

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
    const previousObject = { a: 'uno', b: 'due' };
    const nextObject = { ...previousObject, a: 'zeta' };
    // const { a, ...rest } = previousObject;


    this.handler$ = this._formService.handler$.pipe(
      filter(item => !!item),
      // map(item => ({
      //   ...item,
      //   emailAddress: item.emailAddress.replace('@', '#')
      // })),
      // tap(({ notes }) => console.log(notes)),
      tap(item => this.list.push(item)),
    );
  }

  ngOnDestroy(): void {
  }

  onDelete(index: number): void {
    this.list = this.list.filter((item, i) => i !== index);
    // this.delete.emit(index);
  }

}
