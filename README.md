# Pyro Examples

### Frontend
It is still possible to ship pre-compiled frontend assets, no breaking changes or backward incompatibilities & does not interfere with the default PyroCMS assets.

The pros of this setup:
- Allows PyroCMS addons/modules to provide modular frontend assets. similar to laravel.
- Can be implemented for the admin and/or website
- Allows exporting/importing between modules
- Tree shaking
- Application bootstrapping (similar to Laravel using a service container and service providers.). Check **@pyro/platform**
- Uses yarn workspaces. Which enables us to do something similar to our node packges as `composer-merge-plugin` is doing for php.
- Webpack HMR support. Automatically switches between compiled assets and webpack-dev-server served assets.

The cons:
- It requires to run a yarn/npm script after composer installations of addons. Altough this can be averted by pre-compilation, it would mean losing tree-hasing


#### Small example
**pyro.module.navigation**
`addons/shared/pyro/navigation-module/package.json`
```json
{
    "name": "@pyro/navigation",
    "pyro": {
        "srcPath": "lib",
        "entry": {
            "development": "index.js",
            "production": "index.js"
        }
    },
    "dependencies": {
        "@pyro/platform": "^1.0.0"
    }
}
```

- entry: `addons/shared/pyro/navigation-module/lib/index.js`
- output: `addons/shared/pyro/navigation-module/resources/js/addon.js`
```ts
import {ServiceProvider} from '@pyro/platform'
import Foo from './Foo'
import Bar from './Bar'
import NavigationVuePlugin from './Plugin'

export class NavigationServiceProvider extends ServiceProvider {
    register(){
        this.app.singleton('foo', Foo);
        this.app.instance('bar', new Bar);
        
        this.app.hooks.start.tap('pyro.module.navigation', (Vue) => {
            Vue.use(NavigationVuePlugin)
        });
    }
    boot(){
        const foobar = this.app.get('foobar'); // provided by another module's ServiceProvider
        const foo = this.app.get('foo'); 
        foobar.register(foo);
    }
    // also supports:
    // async register(){} 
    // async boot(){}
}
```
```php
// In a service provider, ui builder, or wherever..
$assets->add('scripts.js', 'pyro.module.navigation::js/addon.js', [ 'webpack:navigation:scripts' ]);
app()->platform->addProvider('pyro.navigation.NavigationServiceProvider'); // adds the js service provider to the `Application` inside a view with js script  
```

#### Building


#### Modules

##### @pyro/platform
This is the core for the front-end. It provides us the means to handle a modular setup with features like:
- Application bootstrapping (similar to Laravel using a service container and service providers.)
- Execution lifecycle
- Inversion Of Control / Service Providers
- Base classes and utilities