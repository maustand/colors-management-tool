import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';


export class Store<T> {
  private readonly state$: BehaviorSubject<T>;
  readonly $: Observable<T>;

  constructor(initState: T) {
    this.state$ = new BehaviorSubject<T>(initState);
    this.$ = this.state$.asObservable();
  }

  get state(): T {
    return this.state$.getValue();
  }

  protected setState(nextState: T) {
    this.state$.next(nextState);
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.$.pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }
}
