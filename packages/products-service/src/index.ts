import 'dotenv/config';

import db from 'db';
import {initBroker, startBroker} from './broker';
import ProductsService from 'products/Products.service';
import CategoriesService from 'products/Categories.service';
import {Product} from '@prisma/client';

async function init() {
  const services = {
    ProductsService,
    CategoriesService,
  };
  await initBroker({preloadServices: [services]});
  await startBroker();
  // const p = await db.product.create({
  //   data: {
  //     title: 'title1',
  //     description: 'desc2',
  //   },
  // });
}

init();
