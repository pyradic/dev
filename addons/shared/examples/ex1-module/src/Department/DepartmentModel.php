<?php namespace Examples\Ex1Module\Department;

use Examples\Ex1Module\Department\Contract\DepartmentInterface;
use Anomaly\Streams\Platform\Model\Users\UsersDepartmentEntryModel;

class DepartmentModel extends UsersDepartmentEntryModel implements DepartmentInterface
{

}
