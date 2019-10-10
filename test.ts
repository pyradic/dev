import webpacker,{Webpacker,interfaces,blocks} from  '@radic/webpacker'
import { Blocks } from '@radic/webpacker/lib/blocks';

declare module '@radic/webpacker/lib/blocks' {
    export interface Blocks {
        pyrocms: {
            asdf()
        }
    }
}
declare module '@radic/webpacker/lib/Webpacker' {

    interface Webpacker {
        blocks:Blocks
    }
}

export function addPyroBlocks(wp:Webpacker) {
    wp.blocks.pyrocms = {
        asdf() {}
    }
}