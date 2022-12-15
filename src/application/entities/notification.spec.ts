import { Content  } from "./content";
import { Notification  } from "./notification";

describe('Notification', () => {
    it('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'example-recipient-id',
            //createdAt: new Date(), nao utilizado na criacao
        });
        
    
        expect(notification).toBeTruthy();
    });
    
  
})
