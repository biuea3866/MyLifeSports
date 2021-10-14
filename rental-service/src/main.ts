import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://vsrleeyf:O4J_NqiIDQcEtmyEAHHAnhJvsr_4hBYg@snake.rmq2.cloudamqp.com/vsrleeyf'],
      queue: 'paymentToRentalQueue',
      queueOptions: {
        durable: true,
      }
    }
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.startAllMicroservices();
  await app.listen(7300);
}
bootstrap();
