import { define, factory } from 'typeorm-seeding';
import Faker from 'faker';
import { User } from '../../users/entities/user.entity';
import { randEmail, randFullName, randLastName, randPassword } from '@ngneat/falso';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.user_name = faker.name.firstName();
  user.last_name = faker.name.lastName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  return user;
});

export default factory(User)();