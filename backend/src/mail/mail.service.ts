import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {

    sendMail(body:{to:{email:string,username:string},subject:string,message:string}){

        return{
            message:"Domain authentication is required to send emails. Please configure your domain's DNS settings to ensure secure and reliable email delivery.",
            mail:body.to.email,
            content:body.message
        }
    }

}
