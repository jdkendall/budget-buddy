import {of} from 'rxjs';

export class MockUserService {
    getIdToken() {
        return of("1234")
    }
}
