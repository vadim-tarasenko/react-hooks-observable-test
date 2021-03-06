// services
import ApiService from 'modules/core/services/api.service';
import LoggerService from 'modules/core/services/logger.service';
// types
import { User } from 'modules/user/user.types';

class UserService {
  api: ApiService;
  logger: LoggerService;

  constructor(api: ApiService, logger: LoggerService) {
    this.api = api;
    this.logger = logger;
  }

  loadUsers = async () => {
    const users = await this.api.get<User[]>('users');

    return users;
  };
}

const userService = new UserService(new ApiService(), new LoggerService());

export default userService;
