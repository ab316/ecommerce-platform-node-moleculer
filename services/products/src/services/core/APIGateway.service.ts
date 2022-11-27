import {Service as MoleculerService} from 'moleculer';
import {Service} from 'moleculer-decorators';
import web from 'moleculer-web';

@Service({
  name: 'api',
  mixins: [web],
  settings: {
    port: process.env.PORT ?? 3000,
  },
})
class APIGatewayService extends MoleculerService {}

export default APIGatewayService;
