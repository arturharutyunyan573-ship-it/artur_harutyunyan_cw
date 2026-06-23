import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { Users } from '../models/index.js';
import sendEmail from '../services/email.js';

export const register = async (req, res, next) => {
    try {

        const user = await Users.create({
            ...req.body,
            password: Users.hashPassword(req.body.password),
            activationToken: uuidv4()
        });

        await sendEmail(
            user.email,
            'Activation',
            'activate',
            {
                name: user.name,
                link: `${process.env.BACKEND_HOST}/users/activate/${user.activationToken}`
            }
        );

        res.json(
            _.omit(
                user.toJSON(),
                [
                    'password',
                    'activationToken',
                    'resetToken',
                    'resetTokenExp'
                ]
            )
        );

    } catch (e) {
        next(e);
    }
};