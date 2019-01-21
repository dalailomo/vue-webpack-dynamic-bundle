import routes from './routes';

export default {
    install: (shell) => {
        shell.addRoutes(routes);
    }
};
