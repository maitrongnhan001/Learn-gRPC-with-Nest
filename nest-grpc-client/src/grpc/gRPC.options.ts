import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Same options object used by microservice server
export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, '/hero.proto'),
  },
};
