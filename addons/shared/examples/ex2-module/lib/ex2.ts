import './ex2.scss';
import { ServiceProvider } from '@pyro/platform';
import { debug } from 'debug';
import { install } from './install';

const log = debug('ex2');


export class PermissionFormServiceProvider extends ServiceProvider {
    public register(): any | Promise<any> {
        this.app.hooks.start.tap('PermissionForm', Vue => {
            log('hooks.start', { Vue });
            this.app.instance('ex2.permissions', PLATFORM_DATA.ex2.permissions)
            install(Vue)
        });
    }
}

// export class PermissionForm {
//     // el: HTMLFormElement
//     permissions: Permissions                     = [];
//     cards: HTMLElement[]                         = [];
//     checkboxes: Record<string, HTMLInputElement> = {};
//     vue: Vue;
//
//     constructor(public readonly el: HTMLFormElement) {
//         // this.el          = document.getElementById(id) as HTMLFormElement;
//         this.permissions = JSON.parse(this.el.getAttribute('data-permissions'));
//         this.cards       = Array.from(this.el.querySelectorAll(':scope > .card'));
//         // for ( const card of this.cards ) {
//         //     card.style.display = 'none';
//         // }
//         const checkboxes = Array.from(this.el.getElementsByTagName('input')).filter(input => input.type.toLowerCase() === 'checkbox');
//         for ( const checkbox of checkboxes ) {
//             this.checkboxes[ checkbox.value ] = checkbox;
//         }
//
//     }
// }


