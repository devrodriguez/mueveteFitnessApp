import { Observable } from 'rxjs';

export class Session {
    public customer: Observable<string>;

    constructor() {
        this.customer = Observable.create(observer => {
            observer.next(sessionStorage.getItem('c'))
        })
    }
}
