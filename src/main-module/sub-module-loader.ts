import router from './router';

export const shell = {
  _routes: [],

  addRoutes: (routes) => {
    router.addRoutes(routes);
    shell._routes.push(routes);
  }

  /// ...the rest of the shell stuff
};

// this could come from a back-end api endpoint
const modulesToLoad = [
  'alert',
  'user',
  'billing',
];

modulesToLoad.forEach(moduleName => {
    try {
        import(/* webpackInclude: /dist_submodules/ */ `../../dist_submodules/submodule-${moduleName}.js`).then(module => {
            console.log(module);
            module.default.install(shell);
        }).catch(error => {
            console.log('Import promise rejected: ', error);
        });
    } catch (error) {
        console.log('Error while importing', error);
    }
});
