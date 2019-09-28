# Pyro Examples

#### Examples
[Check em out here](addons/shared/examples)

#### bootstrap

###### 1. Add missing modules from github
**Inside `addons/shared/pyro`**
- `git clone https://github.com/pyradic/admin-theme`



###### 2. Install node_modules
Because the project is using `yarn workspaces` it can only be installed using `yarn`.


###### 3. Compile
Using `scripts` in `package.json` you can:
- `yarn serve` to use webpack-dev-server with HMR. The backend is aware and will use the appropriate files.
- `yarn build:dev` to use webpack in _development_ mode. This will extract all css and js and place it in the respective addon's `resources/css` and `resources/js` folder.
- `yarn build:prod` does the same as dev, but with all possible optimizations




