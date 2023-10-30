import {of} from 'rxjs';

export class MockUserService {
    public getIdToken() {
        return of("1234")
    }
}
