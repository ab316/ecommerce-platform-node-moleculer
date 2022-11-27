import {ServiceBroker} from 'moleculer';
import APIGatewayService from '@services/core/APIGateway.service';

describe('Sample', async function () {
  const broker = new ServiceBroker({logger: false});
  broker.createService(APIGatewayService);

  this.beforeEach(async function () {
    await broker.start();
  });

  afterEach(async function () {
    await broker.stop();
  });

  it('Sample test case', async function () {
    return true;
  });
});
