export const errorLogger = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};

export const clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something went wrong! ' });
    } else {
        next(err);
    }
};

export const catchAllErrorHandler = (err, req, res, next) => {
    res.status(500);
    res.render('error', { error: err });
};
