import { Container, interfaces } from 'inversify'

class App extends Container {

}

class Binder {
    constructor(protected app: App) {}

    bind<T>(id: interfaces.ServiceIdentifier<T>, singleton: boolean, binder: (app: App) => any)
    bind<T>(id: interfaces.ServiceIdentifier<T>, binder: (app: App) => any)
    bind<T>(...args) {
        let id: interfaces.ServiceIdentifier<T> = args.shift()
        let singleton: boolean                  = false;
        if ( typeof args[ 0 ] === 'boolean' ) {
            singleton = args.shift()
        }
        let binder: (app: App) => any = args.shift();

        if(singleton) {
            let result;
            this.app.bind(id).toDynamicValue(ctx => {
                if(result === undefined) {
                    result = binder(this.app)
                }
                return result;
            })
        }
    }
}