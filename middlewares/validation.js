import createError from 'http-errors';

export default (schema, field = 'body') => {
    return (req, res, next) => {

        const { error, value } = schema.validate(req[field], {
            abortEarly: false
        });

        if (error) {

            const errors = {};

            error.details.forEach(item => {
                errors[item.path[0]] = item.message;
            });

            return next(
                createError(422, {
                    errors
                })
            );
        }

        req[field] = value;

        next();
    };
};