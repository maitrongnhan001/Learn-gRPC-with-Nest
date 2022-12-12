import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HeroesController {
    @GrpcMethod('HeroService', 'FindOne')
    findOne(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): any {
        const items = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Doe'}
        ]

        return items.find(({id}) => id === data.id);
    }
}
