import { Body,Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { SendNotification } from 'src/application/usecases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {

  constructor(private sendNotification: SendNotification){}

  
@Get('notifications')
async list(@Body() body: CreateNotificationBody) {
  const { recipientId, content, category} = body;

  const { notification } = await this.sendNotification.execute({
    recipientId,
    content,
    category
  });
  
  return { notification: NotificationViewModel.toHTTP(notification), };
}


  @Post()
  async create(@Body() body: CreateNotificationBody){
    //console.log(body);
    const { recipientId, content, category} = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    
    return { notification: NotificationViewModel.toHTTP(notification), };
  }
}
