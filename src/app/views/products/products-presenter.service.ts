import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewState } from '../../core/view-state.domain';
import { ProductModel } from '../../models/product.model';

const defaultState: ViewState<ProductModel[]> = { state: 'loaded' };

@Injectable()
export class ProductsPresenterService {
  private viewState = new BehaviorSubject<ViewState<ProductModel[]>>(
    defaultState
  );
  readonly viewState$ = this.viewState.asObservable();

  constructor() {}
}
