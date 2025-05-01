import Joi from 'joi';

export interface UserModel {
  name: string;
  email: string;
  age: number;
  address: string;
}

export const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  address: Joi.string().min(5).required(),
});
