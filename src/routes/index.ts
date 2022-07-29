import express from 'express';
import { emptyController } from '../controllers';
import { emptyMiddleware } from '../middleware/noCache';

const router = express.Router();

router.get("/emptyroute", emptyMiddleware, emptyController);

export { router };