# Examples


### [`ex1-module`](ex1-module)
- Adds a stream (departments) to another addon (users)
- Adds menu item, buttons, routes, etc to users-module
- Sets departments in context of users (control panel, namespace, etc)

### [`ex2-module`](ex2-module)
- Replaces the default permission form for users and roles
- Adds a frontend module
  - With a `Vue` component consisting the `PermissionTree`
  - Exports a `ServiceProvider`
  - Requires `@pyro/platform` to bootstrap the exported `ServiceProvider`

