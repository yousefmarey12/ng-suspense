import { Observable } from "rxjs";

export interface Suspense {
    setup: Promise<any> | Observable<any>
}