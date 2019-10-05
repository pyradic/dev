<?php namespace Examples\Ex1Module\Department;

use Examples\Ex1Module\Department\Contract\DepartmentRepositoryInterface;
use Anomaly\Streams\Platform\Entry\EntryRepository;

/**
 * \Examples\Ex1Module\Department\DepartmentRepository
 *
 * @method \Examples\Ex1Module\Department\DepartmentCollection|\Examples\Ex1Module\Department\Contract\DepartmentInterface[] all(array $ids) 
 * @method \Examples\Ex1Module\Department\DepartmentCollection|\Examples\Ex1Module\Department\Contract\DepartmentInterface[] allWithTrashed(array $ids) 
 * @method \Examples\Ex1Module\Department\DepartmentCollection|\Examples\Ex1Module\Department\Contract\DepartmentInterface[] allWithoutRelations(array $ids) 
 * @method \Examples\Ex1Module\Department\DepartmentCollection|\Examples\Ex1Module\Department\Contract\DepartmentInterface[] findAll(array $ids) 
 * @method \Examples\Ex1Module\Department\DepartmentCollection|\Examples\Ex1Module\Department\Contract\DepartmentInterface[] findAllBy(string $key, $value) 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface first($direction = "asc") 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface find($id) 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface findBy($key, $value) 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface create(array $attributes = []) 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface getModel() 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface newInstance(array $attributes = []) 
 */
class DepartmentRepository extends EntryRepository implements DepartmentRepositoryInterface
{

    /**
     * The entry model.
     *
     * @var DepartmentModel
     */
    protected $model;

    /**
     * Create a new DepartmentRepository instance.
     *
     * @param DepartmentModel $model
     */
    public function __construct(DepartmentModel $model)
    {
        $this->model = $model;
    }
}
