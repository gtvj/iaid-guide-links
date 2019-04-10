let request_logger = (req, res, next) => {

    const app_name = 'iaid-guide-links';

    const template = `${req.method} request to ${req.originalUrl} on ${app_name}`;

    console.log(template);

    next();
};

exports.request_logger = request_logger;
