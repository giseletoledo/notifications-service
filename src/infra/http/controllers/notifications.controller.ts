import { Body,Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/usecases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {

  constructor(private sendNotification: SendNotification){}

  @Post()
  async create(@Body() body: CreateNotificationBody){
    //console.log(body);
    const { recipientId, content, category} = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    
    return { notification:{//formata a entity notification
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    } };
  }
}
