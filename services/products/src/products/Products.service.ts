import {Service as MoleculerService} from 'moleculer';
import {Action, Service} from 'moleculer-decorators';
import db from '@modules/db';

const SERVICE_NAME = 'Products';

@Service({
  name: SERVICE_NAME,
})
export default class ProductsService extends MoleculerService {
  @Action({
    params: {
      id: 'string',
    },
  })
  public async getById(id: string) {
    db.product.findUnique({
      where: {id: id},
    });
  }
}
