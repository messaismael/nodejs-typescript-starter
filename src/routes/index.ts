import express from 'express';
import { emptyController } from '../controllers';
import { emptyMiddleware } from '../middleware/emptyMiddleware';

const router = express.Router();

router.get("/emptyroute", emptyMiddleware, emptyController.getEmpty);

export { router };