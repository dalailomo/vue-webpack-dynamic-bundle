import { instances, Shell } from './shell';

// this could come from a back-end api endpoint
const modulesToLoad = [
  'alert',
  'user',
  'billing',
];

const onSuccessImport = (module: any) => {
    if (process.env.NODE_ENV !== 'production') console.log('Adding module', module);

    const shellInstance = new Shell();
    instances.push(shellInstance);

    module.default.install(shellInstance);
};

const onErrorImport = (error: Error) => {
    if (process.env.NODE_ENV !== 'production') console.error('Import promise rejected: ', error);
};

export const loadSubmodules = (callback: any) => {
    modulesToLoad.forEach(moduleName => {
        if (process.env.NODE_ENV === 'production') {
            import(/* webpackInclude: /dist_submodules/ */ `../../dist_submodules/submodule-${moduleName}.js`)
                .then(onSuccessImport)
                .then(callback)
                .catch(onErrorImport);
        } else {
            import(/* webpackInclude: /submodules/ */ `../submodules/submodule-${moduleName}/boot.ts`)
                .then(onSuccessImport)
                .then(callback)
                .catch(onErrorImport);
        }
    });
};
