import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.enableCors();
  app.use(cookieParser());
  await app.listen(process.env.PORT || 3006);
  console.log(`Application is running on: ${await app.getUrl()}`);

  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
      // Start your application logic here
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });
}
bootstrap();
