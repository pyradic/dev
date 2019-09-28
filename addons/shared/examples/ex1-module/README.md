# ex1-module
- Adds a stream (departments) to another addon (users)
- Adds menu item, buttons, routes, etc to users-module
- Sets departments in context of users (control panel, namespace, etc)

### Highlights
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


##### Model : point to the right entry model
As the title says.

- [`Examples\Ex1Module\Department\DepartmentModel`](src/Department/DepartmentModel.php)
```php
use Anomaly\Streams\Platform\Model\Users\UsersDepartmentEntryModel; // <<< is not the default generated
class DepartmentModel extends UsersDepartmentEntryModel implements DepartmentInterface {}
```


##### Routing
Cannot declare the routes in the `$routes` property,
`AddonProvider::registerRoutes` adds/overrides the `streams:addon` value to `$addon->getNamespace()`.
This would result in empty control panel sections.

So the routes need to be defined in the `map()` method.
This way the control panel sections for the users-module are shown

- [`Examples\Ex1Module\Ex1ModuleServiceProvider::$routes`](src/Ex1ModuleServiceProvider.php#L30)
- [`Examples\Ex1Module\Ex1ModuleServiceProvider::map()`](src/Ex1ModuleServiceProvider.php#L84)

```php
public function map(Router $router)
{
    $router->any('/admin/users/departments', [
        'as'   => 'examples.module.ex1::departments.index',
        'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@index',
    ]);
    //..
}
```


##### Navigation : append menu item and buttons to Users module
As the title says. Need to explicitly set the columns that are used by the translator.  
As these otherwise get resolved to 'anomaly.module.users::...'

- [`Examples\Ex1Module\Ex1ModuleServiceProvider::boot()`](src/Ex1ModuleServiceProvider.php#L58)
```php
public function boot(ModuleCollection $modules)
{
    $modules->get('anomaly.module.users')->addSection('departments', [
        'title'   => 'examples.module.ex1::section.departments.title',
        'buttons' => [
            'new_department' => [
                'text' => 'examples.module.ex1::button.new_department',
            ],
        ],
    ]);
}
```


##### UserForm : add 'department' field to form fields and sections
To use the `department` field we need to add it to the `UserForm`.

The need to extend and wrapping in a decorator class is because the alternative, overriding the binding, will work only once.
What if other modules also want to add 1 or more fields to the user form.

- [`Examples\Ex1Module\Ex1ModuleServiceProvider::register()`](src/Ex1ModuleServiceProvider.php#L45)
```php
public function register(){
    $this->app->extend(UserFormSections::class, function (UserFormSections $target) {
            return new UserFormSectionsDecorator($target);
    });
    $this->app->extend(UserFormFields::class, function (UserFormFields $target) {
        return new UserFormFieldsDecorator($target);
    });
}
```