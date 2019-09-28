<?php namespace Examples\Ex1Module\Department;

use Examples\Ex1Module\Department\Contract\DepartmentRepositoryInterface;
use Anomaly\Streams\Platform\Entry\EntryRepository;

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
