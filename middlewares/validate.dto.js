const { plainToInstance } = require ('class-transformer')
const { validate } = require('class-validator')

const validateDto = (DtoClass) => {
    return async (req, res, next) => {
        const dtoInstance = plainToInstance(DtoClass, req.body);

        const errors = await validate(dtoInstance);
        if (errors.length > 0) {
            return res.status(400).json({ errors: errors.map(err => err.constraints) });
        }

        req.validatedData = dtoInstance;
        next();
    };
};

module.exports = validateDto;
