import { BehaviorSubject } from 'rxjs';
// core
import PersistRepository from 'services/repository/persist-repository';
// types
import type { User } from 'modules/user/user.types';

class UserRepository extends PersistRepository {
  readonly data = new BehaviorSubject<User>({
    id: '13413',
    firstName: 'Vadim',
    lastName: 'Tarasenko',
    email: 'v.tarasenko@seedium.io',
  });

  constructor() {
    super();

    this.persist(this);
  }
}

export default new UserRepository();
