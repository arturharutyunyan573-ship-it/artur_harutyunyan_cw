import jwt from 'jsonwebtoken';
import createError from 'http-errors';

export default (req, res, next) => {
    try {
        const auth = req.headers.authorization;

        if (!auth) {
            throw createError(401, 'Unauthorized');
        }

        const token = auth.replace('Bearer ', '');

        const data = jwt.verify(
            token,
            process.env.TOKEN_SECRET
        );

        req.userId = data.id;

        next();

    } catch {
        next(createError(401, 'Unauthorized'));
    }
};