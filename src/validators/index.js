import * as Yup from 'yup';
import { message } from '../common/message';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required(message.Required.replace(":item", "Email address"))
    .email(message.InvalidEmail),
  password: Yup.string()
    .trim()
    .required(message.Required.replace(":item", "Password")),
});
