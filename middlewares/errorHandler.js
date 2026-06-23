export default (err, req, res, next) => {
    console.error(err);

    res.status(err.status || 500).json({
        errors: err.errors || {
            message: err.message || 'Internal server error'
        }
    });
};