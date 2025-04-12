import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/tracks', router);
    router.get('/', indexController.getTracks.bind(indexController));
    router.post('/', indexController.uploadTrack.bind(indexController));
}