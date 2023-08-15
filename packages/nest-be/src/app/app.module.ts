import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AuthModule, SharedModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
