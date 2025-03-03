import {Module} from "@nestjs/common";

import {MailSenderController} from "./mail-sender.controller";
import {MailSenderService} from "./mail-sender.service";


@Module({
    controllers: [MailSenderController],
    providers: [MailSenderService],
})
export class MailSenderModule {
}
