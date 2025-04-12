export function setRoutes(app) {
    const IndexController = require('../controllers/index').IndexController;
    const indexController = new IndexController();

    app.get('/api/tracks', indexController.getTracks.bind(indexController));
    app.get('/api/tracks/:id', indexController.getTrackById.bind(indexController));
}