import 'dotenv/config';

import {initBroker, startBroker} from './broker';

async function init() {
  await initBroker({preloadServices: []});
  await startBroker();
}

init();
