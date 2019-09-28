# ex1-module
- Adds a stream (departments) to another addon (users)
- Adds menu item, buttons, routes, etc to users-module
- Sets departments in context of users (control panel, namespace, etc)

### Points of Interest
##### Migrations : using namespace

- [migrations/2019_09_28_134133_examples.module.ex1__create_users_fields.php](migrations/2019_09_28_134133_examples.module.ex1__create_users_fields.php)
- [migrations/2019_09_28_134134_examples.module.ex1__create_users_departments_stream.php](migrations/2019_09_28_134134_examples.module.ex1__create_users_departments_stream.php)
- [migrations/2019_09_28_135402_examples.module.ex1__alter_users_stream_add_departments.php](migrations/2019_09_28_135402_examples.module.ex1__alter_users_stream_add_departments.php)

```php
protected $namespace = 'users';
```


##### Migrations : add field to existing stream
Add a field to a existing stream. Field must be in same namespace. We added `department` in `*__create_users_fields.php` migrations.
- [migrations/2019_09_28_135402_examples.module.ex1__alter_users_stream_add_departments.php](migrations/2019_09_28_135402_examples.module.ex1__alter_users_stream_add_departments.php)

```php
protected $namespace = 'users';

protected $stream = ['slug' => 'users' ];

protected $delete = false;

protected $assignments = ['department',];
```

##### Routing : set context of routes
This will make the controller's TableBuilder/FormBuilder change it's behaviour slightly so it  
renders links, breadcrumbs etc like it belongs to the users module.

- [`Examples\Ex1Module\Ex1ModuleServiceProvider`](src/Ex1ModuleServiceProvider.php)
```php
protected $routes = [
    '/admin/users/departments'          => [
        'as'             => 'examples.module.ex1::departments.index',
        'uses'           => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentController@index',
        'streams::addon' => 'anomaly.module.users', // << set context
    ],
];
```


##### Navigation : append menu item and buttons to Users module
As the title says.

- [`Examples\Ex1Module\Ex1ModuleServiceProvider`](src/Ex1ModuleServiceProvider.php)
```php
public function boot(ModuleCollection $modules)
{
    /** @var \Anomaly\UsersModule\UsersModule $module */
    $module = $modules->get('anomaly.module.users');
    $module->addSection('departments', Arr::get($this->addon->getSections(), 'departments', []));
}
```




##### Model : point to the right entry model
As the title says.

- [`Examples\Ex1Module\Department\DepartmentModel`](src/Department/DepartmentModel.php)
```php
use Anomaly\Streams\Platform\Model\Users\UsersDepartmentEntryModel; // <<< is not the default generated
class DepartmentModel extends UsersDepartmentEntryModel implements DepartmentInterface {}
```
