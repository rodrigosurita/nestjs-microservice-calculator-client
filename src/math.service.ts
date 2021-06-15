import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathService {
    
    private client: ClientProxy;

    constructor(){
        this.client = ClientProxyFactory.create({
            transport: Transport.NATS,
            options: {
                url: 'nats://localhost:4222'
              }
        });
    }

    public accumulate(data: number[]) {
        return this.client.send<number, number[]>('add', data);
    }
}