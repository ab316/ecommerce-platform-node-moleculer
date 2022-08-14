import {Service as MoleculerService} from 'moleculer';
import {Service} from 'moleculer-decorators';
import db from 'db';

const SERVICE_NAME = 'Products';

@Service({
  name: SERVICE_NAME,
  // mixins: [DbService],
  // adapter: new SqlAdapter('postgres://admin:admin@postgres/postgres'),
  // model: {
  //   name: 'products',
  //   define: {
  //     name: Sequelize.STRING,
  //   },
  // },
})
export default class ProductsService extends MoleculerService {}
