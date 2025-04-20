import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { UnprocessableEntityException } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       transform: true,
//       whitelist: true,
//       exceptionFactory: (errors) => {
//         const formattedErrors = errors.reduce((acc, error) => {
//           acc[error.property] = Object.values(error.constraints);
//           return acc;
//         }, {});
//         return new UnprocessableEntityException({
//           statusCode: 422,
//           message: 'Validation failed',
//           errors: formattedErrors,
//         });
//       },
//     }),
//   );
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();
