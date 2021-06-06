// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

import { ClientOptions, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

const microserviceOptions: ClientOptions = {
  transport: Transport.TCP,
  options:{
    host:'127.0.0.1',
    port:8877
  }
};

const client = ClientProxyFactory.create(microserviceOptions);

client
  // .send<ReturnType, ParamType>(pattern, param)
  .send<number, number[]>('add', [1,2,3])
  .subscribe(result => logger.log(result));
