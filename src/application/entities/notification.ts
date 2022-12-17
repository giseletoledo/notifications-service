import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;
    
    constructor(props: Replace<NotificationProps, { createdAt?: Date}> ){
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }

    /**
     * get id
     */
    public get id() {
        return this._id;
    }
   
    /**
     * recipientId
     */
    public get recipientId() : string {
        return this.props.recipientId;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }
    
     /**
     * content    */
     public set content(content: Content) {
        /*
        Validação fica na classe content.ts
        if (content.length < 5) {
            throw new Error();
            
        } */

        this.props.content = content;
    }


    public get content(): Content {
        return this.props.content;
    }

    
    /**
     * category   */
    public set category(category : string) {
        this.props.category = category;
    }
    
    
    public get category() : string {
        return this.props.category;
    }

    public set readAt(readAt : Date | null | undefined) {
        this.props.readAt = readAt;
    }
    
    
    public get readAt() : Date | null | undefined {
        return this.props.readAt;
    }
    
    
    public get createAt() : Date {
        return this.props.createdAt;
    }
    
}