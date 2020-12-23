import { singleton } from 'tsyringe';
import ApiService from './modules/core/services/Api.service';

@singleton()
class Foo {
  constructor(private apiService: ApiService) {}
}

export default Foo;
