import './ex2.scss';
import { ServiceProvider } from '@pyro/platform';
import { debug } from 'debug';
import { install } from './install';

const log = debug('ex2');


export class PermissionFormServiceProvider extends ServiceProvider {
    public register(): any | Promise<any> {
        this.app.hooks.start.tap('PermissionForm', Vue => {
            log('hooks.start', { Vue });
            this.app.instance('ex2.permissions', PLATFORM_DATA.examples.module.ex2.permissions)
            install(Vue)
        });
        this.app.hooks.started.tap('PermissionForm', (root) => {
            log('hooks.started', { root });
            const formEl = document.getElementsByClassName('examples-module-ex2__permission-form')[ 0 ];
            if ( formEl !== null ) {
                const form        = new PermissionForm(formEl as HTMLFormElement);
                window[ '$form' ] = form;
                log('permission-form', { form, formEl });
            }
        });

    }
}


export interface AddonPermission {
    label:string
    namespace:string
    streams:Array<{
        label:string
        field:string
        key:string
        permissions:Array<{
            label:string
            enabled:boolean
            key:string
            permission:string
        }>
    }>
}
export type Permissions = Array<AddonPermission>

export class PermissionForm {
    // el: HTMLFormElement
    permissions: Permissions                     = [];
    cards: HTMLElement[]                         = [];
    checkboxes: Record<string, HTMLInputElement> = {};

    constructor(public readonly el: HTMLFormElement) {
        // this.el          = document.getElementById(id) as HTMLFormElement;
        this.permissions = JSON.parse(this.el.getAttribute('data-permissions'));
        this.cards       = Array.from(this.el.querySelectorAll(':scope > .card'));
        // for ( const card of this.cards ) {
        //     card.style.display = 'none';
        // }
        const checkboxes = Array.from(this.el.getElementsByTagName('input')).filter(input => input.type.toLowerCase() === 'checkbox');
        for ( const checkbox of checkboxes ) {
            this.checkboxes[ checkbox.value ] = checkbox;
        }
    }
}


