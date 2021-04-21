import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

/**
 * Tipos de parâmetros
 * Routes Params => parâmetros de rotas
 * http://localhost:5000/settings/1
 *
 * Query Params => Filtros em buscas
 * http://localhost:5000/settings/1?search=algumacoisa&
 *
 * Body Params => Inserções dentro da requisição
 * {Json Objects}
 *
 */
const settingsController = new SettingsController();
routes.post('/settings', settingsController.create);

export { routes };
