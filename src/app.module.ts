import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { PublisherModule } from './publisher/publisher.module';
import { GenereModule } from './genere/genere.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthorModule, BookModule, PublisherModule, GenereModule,ConfigModule.forRoot({isGlobal:true}), DbModule, AuthModule],
})
export class AppModule { }
