import { pyro } from '@pyro/build-tools'

pyro.wp.entry('core').add(resolve())

pyro.finder.find().forEach(addon => {
    pyro.includeAddon(addon);
})

const config = pyro.toConfig();


export default config;