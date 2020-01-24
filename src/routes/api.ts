
import express,
       { Request,
         Response,
         NextFunction } from 'express';

import { ValidationContext }       from 'tynder/modules/types';
import { deserializeFromObject }   from 'tynder/modules/serializer';
import { validate,
         getType }                 from 'tynder/modules/validator';

import { GreetingRequestMessage,
         GreetingResponseMessage } from '../schema-types/greeting';
import GreetingSchema              from '../schema-compiled/greeting';



const router = express.Router();
const schema = deserializeFromObject(GreetingSchema);

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    const ctx: Partial<ValidationContext> = {};
    const validated = validate<GreetingRequestMessage>(req.query, getType(schema, 'GreetingRequestMessage'), ctx);
    if (validated) {
        const ret: GreetingResponseMessage = {
            greeting: 'Hello',
            to: validated.value.name,
        };
        res.status(200).json(ret);
    } else {
        res.status(400).json({
            errors: ctx.errors,
        });
    }
});

export default router;
