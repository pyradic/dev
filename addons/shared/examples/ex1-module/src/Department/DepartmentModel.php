<?php namespace Examples\Ex1Module\Department;

use Examples\Ex1Module\Department\Contract\DepartmentInterface;
use Anomaly\Streams\Platform\Model\Users\UsersDepartmentEntryModel;

/**
 * \Examples\Ex1Module\Department\DepartmentModel
 *
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property int|null $enabled
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Users\UsersDepartmentEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Examples\Ex1Module\Department\DepartmentModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Examples\Ex1Module\Department\DepartmentModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Examples\Ex1Module\Department\DepartmentModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Examples\Ex1Module\Department\DepartmentModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class DepartmentModel extends UsersDepartmentEntryModel implements DepartmentInterface
{

}
