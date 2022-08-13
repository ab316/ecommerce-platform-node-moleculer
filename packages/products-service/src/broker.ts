import {ServiceBroker, Service} from 'moleculer';
import coreServices from '@services/core';

let broker: ServiceBroker;

async function initBroker({gateway = true, preloadServices = [] as Service[]}) {
  gateway = typeof gateway === 'undefined' ? true : gateway;
  preloadServices = typeof preloadServices === 'undefined' ? [] : preloadServices;

  broker = new ServiceBroker();
  if (gateway) broker.createService(coreServices.APIGatewayService);
  preloadServices.map((services) => createServices(services));
}

async function startBroker() {
  await broker.start();
}

async function createServices(res) {
  Object.keys(res).map((f) => {
    broker.createService(res[f]);
  });
}

export {broker, initBroker, startBroker, createServices};
