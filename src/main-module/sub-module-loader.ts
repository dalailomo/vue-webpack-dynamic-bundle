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

const onSuccessImport = (module: any) => {
    if (process.env.NODE_ENV !== 'production') console.log('Adding module', module);

    module.default.install(shell);
};

const onErrorImport = (error: Error) => {
    if (process.env.NODE_ENV !== 'production') console.error('Import promise rejected: ', error);
};

modulesToLoad.forEach(moduleName => {
    if (process.env.NODE_ENV === 'production') {
        import(/* webpackInclude: /dist_submodules/ */ `../../dist_submodules/submodule-${moduleName}.js`)
            .then(onSuccessImport)
            .catch(onErrorImport);
    } else {
        import(/* webpackInclude: /submodules/ */ `../submodules/submodule-${moduleName}/boot.ts`)
            .then(onSuccessImport)
            .catch(onErrorImport);
    }
});
