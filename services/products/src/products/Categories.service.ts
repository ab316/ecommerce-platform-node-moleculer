import {Service as MoleculerService} from 'moleculer';
import {Service} from 'moleculer-decorators';

const SERVICE_NAME = 'Categories';

@Service({
  name: SERVICE_NAME,
  // mixins: [DbService],
  // adapter: new SqlAdapter('postgres://admin:admin@postgres/postgres'),
  // model: {
  //   name: 'categories',
  //   define: {
  //     name: Sequelize.STRING,
  //   },
  // },
})
export default class CategoriesService extends MoleculerService {}
