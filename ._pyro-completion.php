<?php
namespace Anomaly\SettingsModule\Setting {
/**
 * Class SettingModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property string $key
 * @property string|null $value
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\SettingsModule\Setting\SettingModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\SettingsModule\Setting\SettingModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\SettingsModule\Setting\SettingModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\SettingsModule\Setting\SettingModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class SettingModel{}
}
namespace Anomaly\SettingsModule\Setting {
/**
 * Class SettingCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface[] all() 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface first() 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface[] get($key, $default=null) 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface find($key, $default=null) 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface findBy($key, $value) 
 */
class SettingCollection{}
}
namespace Anomaly\SettingsModule\Setting {
/**
 * Class SettingObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class SettingObserver{}
}
namespace Anomaly\SettingsModule\Setting {
/**
 * Class SettingRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\SettingsModule\Setting\SettingCollection|\Anomaly\SettingsModule\Setting\Contract\SettingInterface[] all(array $ids) 
 * @method \Anomaly\SettingsModule\Setting\SettingCollection|\Anomaly\SettingsModule\Setting\Contract\SettingInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\SettingsModule\Setting\SettingCollection|\Anomaly\SettingsModule\Setting\Contract\SettingInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\SettingsModule\Setting\SettingCollection|\Anomaly\SettingsModule\Setting\Contract\SettingInterface[] findAll(array $ids) 
 * @method \Anomaly\SettingsModule\Setting\SettingCollection|\Anomaly\SettingsModule\Setting\Contract\SettingInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface first($direction = "asc") 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface find($id) 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface findBy($key, $value) 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface create(array $attributes = []) 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface getModel() 
 * @method \Anomaly\SettingsModule\Setting\Contract\SettingInterface newInstance(array $attributes = []) 
 */
class SettingRepository{}
}
namespace Anomaly\SettingsModule\Setting\Contract {
/**
 * Interface SettingInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\SettingsModule\Setting\SettingModel
 */
class SettingInterface{}
}
namespace Anomaly\SettingsModule\Setting\Contract {
/**
 * Interface SettingRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\SettingsModule\Setting\SettingRepository
 */
class SettingRepositoryInterface{}
}
namespace Anomaly\PreferencesModule\Preference {
/**
 * Class PreferenceModel
 *
 * @method Builder belongingToUser(UserInterface $user)
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property int $user_id
 * @property string $key
 * @property string|null $value
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\UsersModule\User\UserModel $user
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\PreferencesModule\Preference\PreferenceModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PreferencesModule\Preference\PreferenceModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PreferencesModule\Preference\PreferenceModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PreferencesModule\Preference\PreferenceModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class PreferenceModel{}
}
namespace Anomaly\PreferencesModule\Preference {
/**
 * Class PreferenceCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] all() 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface first() 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] get($key, $default=null) 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface find($key, $default=null) 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface findBy($key, $value) 
 */
class PreferenceCollection{}
}
namespace Anomaly\PreferencesModule\Preference {
/**
 * Class PreferenceObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PreferenceObserver{}
}
namespace Anomaly\PreferencesModule\Preference {
/**
 * Class PreferenceRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\PreferencesModule\Preference\PreferenceCollection|\Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] all(array $ids) 
 * @method \Anomaly\PreferencesModule\Preference\PreferenceCollection|\Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\PreferencesModule\Preference\PreferenceCollection|\Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\PreferencesModule\Preference\PreferenceCollection|\Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] findAll(array $ids) 
 * @method \Anomaly\PreferencesModule\Preference\PreferenceCollection|\Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface first($direction = "asc") 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface find($id) 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface findBy($key, $value) 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface create(array $attributes = []) 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface getModel() 
 * @method \Anomaly\PreferencesModule\Preference\Contract\PreferenceInterface newInstance(array $attributes = []) 
 */
class PreferenceRepository{}
}
namespace Anomaly\PreferencesModule\Preference\Contract {
/**
 * Interface PreferenceInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PreferencesModule\Preference\PreferenceModel
 */
class PreferenceInterface{}
}
namespace Anomaly\PreferencesModule\Preference\Contract {
/**
 * Interface PreferenceRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PreferencesModule\Preference\PreferenceRepository
 */
class PreferenceRepositoryInterface{}
}
namespace Anomaly\AddonsModule\Addon {
/**
 * Class AddonModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property string $type
 * @property string $name
 * @property string $namespace
 * @property string $title
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property array $marketplace
 * @property string|null $description
 * @property string|null $homepage
 * @property $this $requires
 * @property $this $suggests
 * @property array $licenses
 * @property array $authors
 * @property array $support
 * @property array $assets
 * @property string|null $readme
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property int|null $versions_count
 * @method static \Anomaly\AddonsModule\Addon\AddonModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\AddonsModule\Addon\AddonModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\AddonsModule\Addon\AddonModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\AddonsModule\Addon\AddonModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class AddonModel{}
}
namespace Anomaly\AddonsModule\Addon {
/**
 * Class AddonCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface[] all() 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface first() 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface[] get($key, $default=null) 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface find($key, $default=null) 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface findBy($key, $value) 
 */
class AddonCollection{}
}
namespace Anomaly\AddonsModule\Addon {
/**
 * Class AddonRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\AddonsModule\Addon\AddonCollection|\Anomaly\AddonsModule\Addon\Contract\AddonInterface[] all(array $ids) 
 * @method \Anomaly\AddonsModule\Addon\AddonCollection|\Anomaly\AddonsModule\Addon\Contract\AddonInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\AddonsModule\Addon\AddonCollection|\Anomaly\AddonsModule\Addon\Contract\AddonInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\AddonsModule\Addon\AddonCollection|\Anomaly\AddonsModule\Addon\Contract\AddonInterface[] findAll(array $ids) 
 * @method \Anomaly\AddonsModule\Addon\AddonCollection|\Anomaly\AddonsModule\Addon\Contract\AddonInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface first($direction = "asc") 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface find($id) 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface findBy($key, $value) 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface create(array $attributes = []) 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface getModel() 
 * @method \Anomaly\AddonsModule\Addon\Contract\AddonInterface newInstance(array $attributes = []) 
 */
class AddonRepository{}
}
namespace Anomaly\AddonsModule\Addon\Contract {
/**
 * Interface AddonInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\AddonsModule\Addon\AddonModel
 */
class AddonInterface{}
}
namespace Anomaly\AddonsModule\Addon\Contract {
/**
 * Interface AddonRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\AddonsModule\Addon\AddonRepository
 */
class AddonRepositoryInterface{}
}
namespace Anomaly\AddonsModule\Repository {
/**
 * Class RepositoryModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property string $slug
 * @property string $url
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Addons\AddonsRepositoriesEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\AddonsModule\Repository\RepositoryModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\AddonsModule\Repository\RepositoryModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\AddonsModule\Repository\RepositoryModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\AddonsModule\Repository\RepositoryModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class RepositoryModel{}
}
namespace Anomaly\AddonsModule\Repository {
/**
 * Class RepositoryCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] all() 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface first() 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] get($key, $default=null) 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface find($key, $default=null) 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface findBy($key, $value) 
 */
class RepositoryCollection{}
}
namespace Anomaly\AddonsModule\Repository {
/**
 * Class RepositoryObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class RepositoryObserver{}
}
namespace Anomaly\AddonsModule\Repository {
/**
 * \Anomaly\AddonsModule\Repository\RepositoryRepository
 *
 * @method \Anomaly\AddonsModule\Repository\RepositoryCollection|\Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] all(array $ids) 
 * @method \Anomaly\AddonsModule\Repository\RepositoryCollection|\Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\AddonsModule\Repository\RepositoryCollection|\Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\AddonsModule\Repository\RepositoryCollection|\Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] findAll(array $ids) 
 * @method \Anomaly\AddonsModule\Repository\RepositoryCollection|\Anomaly\AddonsModule\Repository\Contract\RepositoryInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface first($direction = "asc") 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface find($id) 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface findBy($key, $value) 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface create(array $attributes = []) 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface getModel() 
 * @method \Anomaly\AddonsModule\Repository\Contract\RepositoryInterface newInstance(array $attributes = []) 
 */
class RepositoryRepository{}
}
namespace Anomaly\AddonsModule\Repository {
/**
 * Class RepositorySeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class RepositorySeeder{}
}
namespace Anomaly\AddonsModule\Repository\Contract {
/**
 * Interface RepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\AddonsModule\Repository\RepositoryModel
 */
class RepositoryInterface{}
}
namespace Anomaly\AddonsModule\Repository\Contract {
/**
 * \Anomaly\AddonsModule\Repository\Contract\RepositoryRepositoryInterface
 *
 * @mixin \Anomaly\AddonsModule\Repository\RepositoryRepository
 */
class RepositoryRepositoryInterface{}
}
namespace Anomaly\BlocksModule\Area {
/**
 * Class AreaModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property string $slug
 * @property \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\BlockModel[] $blocks
 * @property int|null $blocks_count
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Blocks\BlocksAreasEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\BlocksModule\Area\AreaModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Area\AreaModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Area\AreaModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Area\AreaModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class AreaModel{}
}
namespace Anomaly\BlocksModule\Area {
/**
 * \Anomaly\BlocksModule\Area\AreaRepository
 *
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Area\Contract\AreaInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Area\Contract\AreaInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Area\Contract\AreaInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Area\Contract\AreaInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Area\Contract\AreaInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\BlocksModule\Area\Contract\AreaInterface first($direction = "asc") 
 * @method \Anomaly\BlocksModule\Area\Contract\AreaInterface find($id) 
 * @method \Anomaly\BlocksModule\Area\Contract\AreaInterface findBy($key, $value) 
 * @method \Anomaly\BlocksModule\Area\Contract\AreaInterface create(array $attributes = []) 
 * @method \Anomaly\BlocksModule\Area\Contract\AreaInterface getModel() 
 * @method \Anomaly\BlocksModule\Area\Contract\AreaInterface newInstance(array $attributes = []) 
 */
class AreaRepository{}
}
namespace Anomaly\BlocksModule\Area {
/**
 * Class AreaSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class AreaSeeder{}
}
namespace Anomaly\BlocksModule\Area\Contract {
/**
 * Interface AreaInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\BlocksModule\Area\AreaModel
 */
class AreaInterface{}
}
namespace Anomaly\BlocksModule\Area\Contract {
/**
 * Interface AreaRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\BlocksModule\Area\AreaRepository
 */
class AreaRepositoryInterface{}
}
namespace Anomaly\BlocksModule\Block {
/**
 * Class BlockModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property int $area_id
 * @property string $area_type
 * @property int $field_id
 * @property string $extension
 * @property int|null $entry_id
 * @property string|null $entry_type
 * @property int|null $display_title
 * @property int|null $type_id
 * @property \Anomaly\BlocksModule\Block\BlockModel $area
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\BlocksModule\Block\BlockModel|null $entry
 * @property \Anomaly\Streams\Platform\Field\FieldModel $field
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Blocks\BlocksBlocksEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\BlocksModule\Type\TypeModel|null $type
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\BlocksModule\Block\BlockModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Block\BlockModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Block\BlockModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Block\BlockModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class BlockModel{}
}
namespace Anomaly\BlocksModule\Block {
/**
 * Class BlockCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface[] all() 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface first() 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface[] get($key, $default=null) 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface find($key, $default=null) 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface findBy($key, $value) 
 */
class BlockCollection{}
}
namespace Anomaly\BlocksModule\Block {
/**
 * Class BlockPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\BlocksModule\Block\BlockModel
 */
class BlockPresenter{}
}
namespace Anomaly\BlocksModule\Block {
/**
 * Class BlockRepository
 *
 * @link http://anomaly.is/streams-platform
 * @author AnomalyLabs, Inc. <hello@anomaly.is>
 * @author Ryan Thompson <ryan@anomaly.is>
 * @package Anomaly\BlocksModule\Block
 * @method \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\Contract\BlockInterface[] all(array $ids) 
 * @method \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\Contract\BlockInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\Contract\BlockInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\Contract\BlockInterface[] findAll(array $ids) 
 * @method \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\Contract\BlockInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface first($direction = "asc") 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface find($id) 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface findBy($key, $value) 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface create(array $attributes = []) 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface getModel() 
 * @method \Anomaly\BlocksModule\Block\Contract\BlockInterface newInstance(array $attributes = []) 
 */
class BlockRepository{}
}
namespace Anomaly\BlocksModule\Block\Contract {
/**
 * Interface BlockInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\BlocksModule\Block\BlockModel
 */
class BlockInterface{}
}
namespace Anomaly\BlocksModule\Block\Contract {
/**
 * Interface BlockRepositoryInterface
 *
 * @link http://anomaly.is/streams-platform
 * @author AnomalyLabs, Inc. <hello@anomaly.is>
 * @author Ryan Thompson <ryan@anomaly.is>
 * @package Anomaly\BlocksModule\Block\Contract
 * @mixin \Anomaly\BlocksModule\Block\BlockRepository
 */
class BlockRepositoryInterface{}
}
namespace Anomaly\BlocksModule\Type {
/**
 * Class TypeModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $category
 * @property string $slug
 * @property string $content_layout
 * @property string $wrapper_layout
 * @property \Anomaly\BlocksModule\Block\BlockCollection|\Anomaly\BlocksModule\Block\BlockModel[] $blocks
 * @property int|null $blocks_count
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Blocks\BlocksTypesEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\BlocksModule\Type\TypeModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Type\TypeModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Type\TypeModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\BlocksModule\Type\TypeModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class TypeModel{}
}
namespace Anomaly\BlocksModule\Type {
/**
 * Class TypeObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class TypeObserver{}
}
namespace Anomaly\BlocksModule\Type {
/**
 * Class TypeRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Type\Contract\TypeInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Type\Contract\TypeInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Type\Contract\TypeInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Type\Contract\TypeInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\BlocksModule\Type\Contract\TypeInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\BlocksModule\Type\Contract\TypeInterface first($direction = "asc") 
 * @method \Anomaly\BlocksModule\Type\Contract\TypeInterface find($id) 
 * @method \Anomaly\BlocksModule\Type\Contract\TypeInterface findBy($key, $value) 
 * @method \Anomaly\BlocksModule\Type\Contract\TypeInterface create(array $attributes = []) 
 * @method \Anomaly\BlocksModule\Type\Contract\TypeInterface getModel() 
 * @method \Anomaly\BlocksModule\Type\Contract\TypeInterface newInstance(array $attributes = []) 
 */
class TypeRepository{}
}
namespace Anomaly\BlocksModule\Type {
/**
 * Class TypeSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class TypeSeeder{}
}
namespace Anomaly\BlocksModule\Type\Contract {
/**
 * Interface TypeInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\BlocksModule\Type\TypeModel
 */
class TypeInterface{}
}
namespace Anomaly\BlocksModule\Type\Contract {
/**
 * Interface TypeRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\BlocksModule\Type\TypeRepository
 */
class TypeRepositoryInterface{}
}
namespace Anomaly\ConfigurationModule\Configuration {
/**
 * Class ConfigurationModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property string $scope
 * @property string $key
 * @property string|null $value
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\ConfigurationModule\Configuration\ConfigurationModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\ConfigurationModule\Configuration\ConfigurationModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\ConfigurationModule\Configuration\ConfigurationModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\ConfigurationModule\Configuration\ConfigurationModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class ConfigurationModel{}
}
namespace Anomaly\ConfigurationModule\Configuration {
/**
 * Class ConfigurationCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] all() 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface first() 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] get($key, $default=null) 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface find($key, $default=null) 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface findBy($key, $value) 
 */
class ConfigurationCollection{}
}
namespace Anomaly\ConfigurationModule\Configuration {
/**
 * Class ConfigurationRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\ConfigurationModule\Configuration\ConfigurationCollection|\Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] all(array $ids) 
 * @method \Anomaly\ConfigurationModule\Configuration\ConfigurationCollection|\Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\ConfigurationModule\Configuration\ConfigurationCollection|\Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\ConfigurationModule\Configuration\ConfigurationCollection|\Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] findAll(array $ids) 
 * @method \Anomaly\ConfigurationModule\Configuration\ConfigurationCollection|\Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface first($direction = "asc") 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface find($id) 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface findBy($key, $value) 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface create(array $attributes = []) 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface getModel() 
 * @method \Anomaly\ConfigurationModule\Configuration\Contract\ConfigurationInterface newInstance(array $attributes = []) 
 */
class ConfigurationRepository{}
}
namespace Anomaly\ConfigurationModule\Configuration\Contract {
/**
 * Interface ConfigurationInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\ConfigurationModule\Configuration\ConfigurationModel
 */
class ConfigurationInterface{}
}
namespace Anomaly\ConfigurationModule\Configuration\Contract {
/**
 * Interface ConfigurationRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\ConfigurationModule\Configuration\ConfigurationRepository
 */
class ConfigurationRepositoryInterface{}
}
namespace Anomaly\DashboardModule\Dashboard {
/**
 * Class DashboardModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property string $layout
 * @property \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\RoleModel[] $allowedRoles
 * @property int|null $allowed_roles_count
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Dashboard\DashboardDashboardsEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @property \Anomaly\DashboardModule\Widget\WidgetCollection|\Anomaly\DashboardModule\Widget\WidgetModel[] $widgets
 * @property int|null $widgets_count
 * @method static \Anomaly\DashboardModule\Dashboard\DashboardModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\DashboardModule\Dashboard\DashboardModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\DashboardModule\Dashboard\DashboardModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\DashboardModule\Dashboard\DashboardModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class DashboardModel{}
}
namespace Anomaly\DashboardModule\Dashboard {
/**
 * Class DashboardCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] all() 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface first() 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] get($key, $default=null) 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface find($key, $default=null) 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface findBy($key, $value) 
 */
class DashboardCollection{}
}
namespace Anomaly\DashboardModule\Dashboard {
/**
 * Class DashboardPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\DashboardModule\Dashboard\DashboardModel
 */
class DashboardPresenter{}
}
namespace Anomaly\DashboardModule\Dashboard {
/**
 * Class DashboardRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\DashboardModule\Dashboard\DashboardCollection|\Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] all(array $ids) 
 * @method \Anomaly\DashboardModule\Dashboard\DashboardCollection|\Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\DashboardModule\Dashboard\DashboardCollection|\Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\DashboardModule\Dashboard\DashboardCollection|\Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] findAll(array $ids) 
 * @method \Anomaly\DashboardModule\Dashboard\DashboardCollection|\Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface first($direction = "asc") 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface find($id) 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface findBy($key, $value) 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface create(array $attributes = []) 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface getModel() 
 * @method \Anomaly\DashboardModule\Dashboard\Contract\DashboardInterface newInstance(array $attributes = []) 
 */
class DashboardRepository{}
}
namespace Anomaly\DashboardModule\Dashboard {
/**
 * Class DashboardSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class DashboardSeeder{}
}
namespace Anomaly\DashboardModule\Dashboard\Contract {
/**
 * Interface DashboardInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\DashboardModule\Dashboard\DashboardModel
 */
class DashboardInterface{}
}
namespace Anomaly\DashboardModule\Dashboard\Contract {
/**
 * Interface DashboardRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\DashboardModule\Dashboard\DashboardRepository
 */
class DashboardRepositoryInterface{}
}
namespace Anomaly\DashboardModule\Widget {
/**
 * Class WidgetModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $extension
 * @property int $column
 * @property int $dashboard_id
 * @property int|null $pinned
 * @property \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\RoleModel[] $allowedRoles
 * @property int|null $allowed_roles_count
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\DashboardModule\Dashboard\DashboardModel $dashboard
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Dashboard\DashboardWidgetsEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\DashboardModule\Widget\WidgetModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\DashboardModule\Widget\WidgetModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\DashboardModule\Widget\WidgetModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\DashboardModule\Widget\WidgetModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class WidgetModel{}
}
namespace Anomaly\DashboardModule\Widget {
/**
 * Class WidgetCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] all() 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface first() 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] get($key, $default=null) 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface find($key, $default=null) 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface findBy($key, $value) 
 */
class WidgetCollection{}
}
namespace Anomaly\DashboardModule\Widget {
/**
 * \Anomaly\DashboardModule\Widget\WidgetObserver
 *
 */
class WidgetObserver{}
}
namespace Anomaly\DashboardModule\Widget {
/**
 * Class WidgetPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\DashboardModule\Widget\WidgetModel
 */
class WidgetPresenter{}
}
namespace Anomaly\DashboardModule\Widget {
/**
 * \Anomaly\DashboardModule\Widget\WidgetRepository
 *
 * @method \Anomaly\DashboardModule\Widget\WidgetCollection|\Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] all(array $ids) 
 * @method \Anomaly\DashboardModule\Widget\WidgetCollection|\Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\DashboardModule\Widget\WidgetCollection|\Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\DashboardModule\Widget\WidgetCollection|\Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] findAll(array $ids) 
 * @method \Anomaly\DashboardModule\Widget\WidgetCollection|\Anomaly\DashboardModule\Widget\Contract\WidgetInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface first($direction = "asc") 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface find($id) 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface findBy($key, $value) 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface create(array $attributes = []) 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface getModel() 
 * @method \Anomaly\DashboardModule\Widget\Contract\WidgetInterface newInstance(array $attributes = []) 
 */
class WidgetRepository{}
}
namespace Anomaly\DashboardModule\Widget {
/**
 * Class WidgetSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class WidgetSeeder{}
}
namespace Anomaly\DashboardModule\Widget\Contract {
/**
 * Interface WidgetInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\DashboardModule\Widget\WidgetModel
 */
class WidgetInterface{}
}
namespace Anomaly\DashboardModule\Widget\Contract {
/**
 * \Anomaly\DashboardModule\Widget\Contract\WidgetRepositoryInterface
 *
 * @mixin \Anomaly\DashboardModule\Widget\WidgetRepository
 */
class WidgetRepositoryInterface{}
}
namespace Anomaly\FilesModule\Disk {
/**
 * Class DiskModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property string $adapter
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\FilesModule\Folder\FolderCollection|\Anomaly\FilesModule\Folder\FolderModel[] $folders
 * @property int|null $folders_count
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Files\FilesDisksEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\FilesModule\Disk\DiskModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\Disk\DiskModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\Disk\DiskModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\Disk\DiskModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class DiskModel{}
}
namespace Anomaly\FilesModule\Disk {
/**
 * Class DiskPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\Disk\DiskModel
 */
class DiskPresenter{}
}
namespace Anomaly\FilesModule\Disk {
/**
 * Class DiskRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\FilesModule\Disk\Contract\DiskInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\FilesModule\Disk\Contract\DiskInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\FilesModule\Disk\Contract\DiskInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\FilesModule\Disk\Contract\DiskInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\FilesModule\Disk\Contract\DiskInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\FilesModule\Disk\Contract\DiskInterface first($direction = "asc") 
 * @method \Anomaly\FilesModule\Disk\Contract\DiskInterface find($id) 
 * @method \Anomaly\FilesModule\Disk\Contract\DiskInterface findBy($key, $value) 
 * @method \Anomaly\FilesModule\Disk\Contract\DiskInterface create(array $attributes = []) 
 * @method \Anomaly\FilesModule\Disk\Contract\DiskInterface getModel() 
 * @method \Anomaly\FilesModule\Disk\Contract\DiskInterface newInstance(array $attributes = []) 
 */
class DiskRepository{}
}
namespace Anomaly\FilesModule\Disk {
/**
 * Class DiskSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class DiskSeeder{}
}
namespace Anomaly\FilesModule\Disk\Contract {
/**
 * Interface DiskInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\Disk\DiskModel
 */
class DiskInterface{}
}
namespace Anomaly\FilesModule\Disk\Contract {
/**
 * Interface DiskRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\Disk\DiskRepository
 */
class DiskRepositoryInterface{}
}
namespace Anomaly\FilesModule\File {
/**
 * Class FileModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $name
 * @property int $disk_id
 * @property int $folder_id
 * @property string $extension
 * @property int $size
 * @property string $mime_type
 * @property int|null $entry_id
 * @property string|null $entry_type
 * @property string|null $keywords
 * @property string|null $height
 * @property string|null $width
 * @property string|null $alt_text
 * @property string|null $title
 * @property string|null $caption
 * @property string|null $description
 * @property string $str_id
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\FilesModule\Disk\DiskModel $disk
 * @property \Anomaly\FilesModule\File\FileModel|null $entry
 * @property \Anomaly\FilesModule\Folder\FolderModel $folder
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\FilesModule\File\FileModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\File\FileModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\File\FileModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\File\FileModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class FileModel{}
}
namespace Anomaly\FilesModule\File {
/**
 * Class FileCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\FilesModule\File\Contract\FileInterface[] all() 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface first() 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface[] get($key, $default=null) 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface find($key, $default=null) 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface findBy($key, $value) 
 */
class FileCollection{}
}
namespace Anomaly\FilesModule\File {
/**
 * Class FileCriteria
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FileCriteria{}
}
namespace Anomaly\FilesModule\File {
/**
 * Class FileObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FileObserver{}
}
namespace Anomaly\FilesModule\File {
/**
 * Class FilePresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\File\FileModel
 */
class FilePresenter{}
}
namespace Anomaly\FilesModule\File {
/**
 * Class FileRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\FilesModule\File\FileCollection|\Anomaly\FilesModule\File\Contract\FileInterface[] all(array $ids) 
 * @method \Anomaly\FilesModule\File\FileCollection|\Anomaly\FilesModule\File\Contract\FileInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\FilesModule\File\FileCollection|\Anomaly\FilesModule\File\Contract\FileInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\FilesModule\File\FileCollection|\Anomaly\FilesModule\File\Contract\FileInterface[] findAll(array $ids) 
 * @method \Anomaly\FilesModule\File\FileCollection|\Anomaly\FilesModule\File\Contract\FileInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface first($direction = "asc") 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface find($id) 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface findBy($key, $value) 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface create(array $attributes = []) 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface getModel() 
 * @method \Anomaly\FilesModule\File\Contract\FileInterface newInstance(array $attributes = []) 
 */
class FileRepository{}
}
namespace Anomaly\FilesModule\File\Contract {
/**
 * Interface FileInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\File\FileModel
 */
class FileInterface{}
}
namespace Anomaly\FilesModule\File\Contract {
/**
 * Interface FileRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\File\FileRepository
 */
class FileRepositoryInterface{}
}
namespace Anomaly\FilesModule\Folder {
/**
 * Class FolderModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property int $disk_id
 * @property string $slug
 * @property string|null $allowed_types
 * @property string $str_id
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\FilesModule\Disk\DiskModel $disk
 * @property \Anomaly\FilesModule\File\FileCollection|\Anomaly\FilesModule\File\FileModel[] $files
 * @property int|null $files_count
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Files\FilesFoldersEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\FilesModule\Folder\FolderModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\Folder\FolderModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\Folder\FolderModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\FilesModule\Folder\FolderModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class FolderModel{}
}
namespace Anomaly\FilesModule\Folder {
/**
 * Class FolderCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface[] all() 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface first() 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface[] get($key, $default=null) 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface find($key, $default=null) 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface findBy($key, $value) 
 */
class FolderCollection{}
}
namespace Anomaly\FilesModule\Folder {
/**
 * Class FolderObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FolderObserver{}
}
namespace Anomaly\FilesModule\Folder {
/**
 * Class FolderPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\Folder\FolderModel
 */
class FolderPresenter{}
}
namespace Anomaly\FilesModule\Folder {
/**
 * Class FolderRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\FilesModule\Folder\FolderCollection|\Anomaly\FilesModule\Folder\Contract\FolderInterface[] all(array $ids) 
 * @method \Anomaly\FilesModule\Folder\FolderCollection|\Anomaly\FilesModule\Folder\Contract\FolderInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\FilesModule\Folder\FolderCollection|\Anomaly\FilesModule\Folder\Contract\FolderInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\FilesModule\Folder\FolderCollection|\Anomaly\FilesModule\Folder\Contract\FolderInterface[] findAll(array $ids) 
 * @method \Anomaly\FilesModule\Folder\FolderCollection|\Anomaly\FilesModule\Folder\Contract\FolderInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface first($direction = "asc") 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface find($id) 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface findBy($key, $value) 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface create(array $attributes = []) 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface getModel() 
 * @method \Anomaly\FilesModule\Folder\Contract\FolderInterface newInstance(array $attributes = []) 
 */
class FolderRepository{}
}
namespace Anomaly\FilesModule\Folder {
/**
 * Class FolderSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FolderSeeder{}
}
namespace Anomaly\FilesModule\Folder\Contract {
/**
 * Interface FolderInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\Folder\FolderModel
 */
class FolderInterface{}
}
namespace Anomaly\FilesModule\Folder\Contract {
/**
 * Interface FolderRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\FilesModule\Folder\FolderRepository
 */
class FolderRepositoryInterface{}
}
namespace Anomaly\HtmlBlockExtension\Block {
/**
 * \Anomaly\HtmlBlockExtension\Block\BlockModel
 *
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\HtmlBlock\HtmlBlockBlocksEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\HtmlBlockExtension\Block\BlockModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\HtmlBlockExtension\Block\BlockModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\HtmlBlockExtension\Block\BlockModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\HtmlBlockExtension\Block\BlockModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class BlockModel{}
}
namespace Anomaly\HtmlBlockExtension\Block\Contract {
/**
 * \Anomaly\HtmlBlockExtension\Block\Contract\BlockInterface
 *
 * @mixin \Anomaly\HtmlBlockExtension\Block\BlockModel
 */
class BlockInterface{}
}
namespace Anomaly\NavigationModule\Link {
/**
 * Class LinkModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property int $menu_id
 * @property string $type
 * @property int $entry_id
 * @property string $entry_type
 * @property string $target
 * @property string|null $class
 * @property int|null $parent_id
 * @property \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\RoleModel[] $allowedRoles
 * @property int|null $allowed_roles_count
 * @property \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\LinkModel[] $children
 * @property int|null $children_count
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\NavigationModule\Link\LinkModel $entry
 * @property mixed|null $raw
 * @property \Anomaly\NavigationModule\Menu\MenuModel $menu
 * @property \Anomaly\NavigationModule\Link\LinkModel|null $parent
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\NavigationModule\Link\LinkModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\NavigationModule\Link\LinkModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\NavigationModule\Link\LinkModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\NavigationModule\Link\LinkModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class LinkModel{}
}
namespace Anomaly\NavigationModule\Link {
/**
 * Class LinkCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface[] all() 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface first() 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface[] get($key, $default=null) 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface find($key, $default=null) 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface findBy($key, $value) 
 */
class LinkCollection{}
}
namespace Anomaly\NavigationModule\Link {
/**
 * Class LinkObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class LinkObserver{}
}
namespace Anomaly\NavigationModule\Link {
/**
 * Class LinkPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\NavigationModule\Link\LinkModel
 */
class LinkPresenter{}
}
namespace Anomaly\NavigationModule\Link {
/**
 * Class LinkRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\Contract\LinkInterface[] all(array $ids) 
 * @method \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\Contract\LinkInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\Contract\LinkInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\Contract\LinkInterface[] findAll(array $ids) 
 * @method \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\Contract\LinkInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface first($direction = "asc") 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface find($id) 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface findBy($key, $value) 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface create(array $attributes = []) 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface getModel() 
 * @method \Anomaly\NavigationModule\Link\Contract\LinkInterface newInstance(array $attributes = []) 
 */
class LinkRepository{}
}
namespace Anomaly\NavigationModule\Link {
/**
 * Class LinkSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class LinkSeeder{}
}
namespace Anomaly\NavigationModule\Link\Contract {
/**
 * Interface LinkInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\NavigationModule\Link\LinkModel
 */
class LinkInterface{}
}
namespace Anomaly\NavigationModule\Link\Contract {
/**
 * Interface LinkRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\NavigationModule\Link\LinkRepository
 */
class LinkRepositoryInterface{}
}
namespace Anomaly\NavigationModule\Menu {
/**
 * Class MenuModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\NavigationModule\Link\LinkCollection|\Anomaly\NavigationModule\Link\LinkModel[] $links
 * @property int|null $links_count
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Navigation\NavigationMenusEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\NavigationModule\Menu\MenuModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\NavigationModule\Menu\MenuModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\NavigationModule\Menu\MenuModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\NavigationModule\Menu\MenuModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class MenuModel{}
}
namespace Anomaly\NavigationModule\Menu {
/**
 * Class MenuObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class MenuObserver{}
}
namespace Anomaly\NavigationModule\Menu {
/**
 * Class MenuRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\NavigationModule\Menu\Contract\MenuInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\NavigationModule\Menu\Contract\MenuInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\NavigationModule\Menu\Contract\MenuInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\NavigationModule\Menu\Contract\MenuInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\NavigationModule\Menu\Contract\MenuInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\NavigationModule\Menu\Contract\MenuInterface first($direction = "asc") 
 * @method \Anomaly\NavigationModule\Menu\Contract\MenuInterface find($id) 
 * @method \Anomaly\NavigationModule\Menu\Contract\MenuInterface findBy($key, $value) 
 * @method \Anomaly\NavigationModule\Menu\Contract\MenuInterface create(array $attributes = []) 
 * @method \Anomaly\NavigationModule\Menu\Contract\MenuInterface getModel() 
 * @method \Anomaly\NavigationModule\Menu\Contract\MenuInterface newInstance(array $attributes = []) 
 */
class MenuRepository{}
}
namespace Anomaly\NavigationModule\Menu {
/**
 * Class MenuSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class MenuSeeder{}
}
namespace Anomaly\NavigationModule\Menu\Contract {
/**
 * Interface MenuInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\NavigationModule\Menu\MenuModel
 */
class MenuInterface{}
}
namespace Anomaly\NavigationModule\Menu\Contract {
/**
 * Interface MenuRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\NavigationModule\Menu\MenuRepository
 */
class MenuRepositoryInterface{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PageModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $str_id
 * @property int $type_id
 * @property int|null $entry_id
 * @property string|null $entry_type
 * @property int|null $parent_id
 * @property int|null $visible
 * @property int|null $enabled
 * @property int|null $exact
 * @property int|null $home
 * @property string|null $theme_layout
 * @property \Illuminate\Support\Carbon|null $publish_at
 * @property \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\RoleModel[] $allowedRoles
 * @property int|null $allowed_roles_count
 * @property \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\PageModel[] $children
 * @property int|null $children_count
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\PagesModule\Page\PageModel|null $entry
 * @property mixed|null $raw
 * @property \Anomaly\PagesModule\Page\PageModel|null $parent
 * @property \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\PageModel[] $siblings
 * @property int|null $siblings_count
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\PagesModule\Page\PageTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\PagesModule\Type\TypeModel $type
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\PagesModule\Page\PageModel live()
 * @method static \Anomaly\PagesModule\Page\PageModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PagesModule\Page\PageModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PagesModule\Page\PageModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PagesModule\Page\PageModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\PagesModule\Page\PageModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class PageModel{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PageCollection
 *
 * @page http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface[] all() 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface first() 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface[] get($key, $default=null) 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface find($key, $default=null) 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface findBy($key, $value) 
 */
class PageCollection{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PageObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PageObserver{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PagePresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PagesModule\Page\PageModel
 */
class PagePresenter{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PageRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\Contract\PageInterface[] all(array $ids) 
 * @method \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\Contract\PageInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\Contract\PageInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\Contract\PageInterface[] findAll(array $ids) 
 * @method \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\Contract\PageInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface first($direction = "asc") 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface find($id) 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface findBy($key, $value) 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface create(array $attributes = []) 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface getModel() 
 * @method \Anomaly\PagesModule\Page\Contract\PageInterface newInstance(array $attributes = []) 
 */
class PageRepository{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PageRouter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PageRouter{}
}
namespace Anomaly\PagesModule\Page {
/**
 * Class PageSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PageSeeder{}
}
namespace Anomaly\PagesModule\Page\Contract {
/**
 * Interface PageInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PagesModule\Page\PageModel
 */
class PageInterface{}
}
namespace Anomaly\PagesModule\Page\Contract {
/**
 * Interface PageRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PagesModule\Page\PageRepository
 */
class PageRepositoryInterface{}
}
namespace Anomaly\PagesModule\Type {
/**
 * Class TypeModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property string $theme_layout
 * @property string $layout
 * @property string $handler
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\PagesModule\Page\PageCollection|\Anomaly\PagesModule\Page\PageModel[] $pages
 * @property int|null $pages_count
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Pages\PagesTypesEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\PagesModule\Type\TypeModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PagesModule\Type\TypeModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PagesModule\Type\TypeModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PagesModule\Type\TypeModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class TypeModel{}
}
namespace Anomaly\PagesModule\Type {
/**
 * Class TypeObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class TypeObserver{}
}
namespace Anomaly\PagesModule\Type {
/**
 * Class TypeRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PagesModule\Type\Contract\TypeInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PagesModule\Type\Contract\TypeInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PagesModule\Type\Contract\TypeInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PagesModule\Type\Contract\TypeInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PagesModule\Type\Contract\TypeInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\PagesModule\Type\Contract\TypeInterface first($direction = "asc") 
 * @method \Anomaly\PagesModule\Type\Contract\TypeInterface find($id) 
 * @method \Anomaly\PagesModule\Type\Contract\TypeInterface findBy($key, $value) 
 * @method \Anomaly\PagesModule\Type\Contract\TypeInterface create(array $attributes = []) 
 * @method \Anomaly\PagesModule\Type\Contract\TypeInterface getModel() 
 * @method \Anomaly\PagesModule\Type\Contract\TypeInterface newInstance(array $attributes = []) 
 */
class TypeRepository{}
}
namespace Anomaly\PagesModule\Type {
/**
 * Class TypeSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class TypeSeeder{}
}
namespace Anomaly\PagesModule\Type\Contract {
/**
 * Interface TypeInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PagesModule\Type\TypeModel
 */
class TypeInterface{}
}
namespace Anomaly\PagesModule\Type\Contract {
/**
 * Interface TypeRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PagesModule\Type\TypeRepository
 */
class TypeRepositoryInterface{}
}
namespace Anomaly\PostsModule\Category {
/**
 * Class CategoryModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\PostModel[] $posts
 * @property int|null $posts_count
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Posts\PostsCategoriesEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\PostsModule\Category\CategoryModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Category\CategoryModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Category\CategoryModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Category\CategoryModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class CategoryModel{}
}
namespace Anomaly\PostsModule\Category {
/**
 * Class CategoryPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Category\CategoryModel
 */
class CategoryPresenter{}
}
namespace Anomaly\PostsModule\Category {
/**
 * Class CategoryRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Category\Contract\CategoryInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Category\Contract\CategoryInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Category\Contract\CategoryInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Category\Contract\CategoryInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Category\Contract\CategoryInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\PostsModule\Category\Contract\CategoryInterface first($direction = "asc") 
 * @method \Anomaly\PostsModule\Category\Contract\CategoryInterface find($id) 
 * @method \Anomaly\PostsModule\Category\Contract\CategoryInterface findBy($key, $value) 
 * @method \Anomaly\PostsModule\Category\Contract\CategoryInterface create(array $attributes = []) 
 * @method \Anomaly\PostsModule\Category\Contract\CategoryInterface getModel() 
 * @method \Anomaly\PostsModule\Category\Contract\CategoryInterface newInstance(array $attributes = []) 
 */
class CategoryRepository{}
}
namespace Anomaly\PostsModule\Category {
/**
 * Class CategorySeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class CategorySeeder{}
}
namespace Anomaly\PostsModule\Category\Contract {
/**
 * Interface CategoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Category\CategoryModel
 */
class CategoryInterface{}
}
namespace Anomaly\PostsModule\Category\Contract {
/**
 * Interface CategoryRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Category\CategoryRepository
 */
class CategoryRepositoryInterface{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $str_id
 * @property int $type_id
 * @property \Illuminate\Support\Carbon $publish_at
 * @property int $author_id
 * @property int $entry_id
 * @property string $entry_type
 * @property int|null $category_id
 * @property int|null $featured
 * @property int|null $enabled
 * @property string|null $tags
 * @property \Anomaly\UsersModule\User\UserModel $author
 * @property \Anomaly\PostsModule\Category\CategoryModel|null $category
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\PostsModule\Post\PostModel $entry
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Posts\PostsPostsEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\PostsModule\Type\TypeModel $type
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\PostsModule\Post\PostModel live()
 * @method static \Anomaly\PostsModule\Post\PostModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Post\PostModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Post\PostModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Post\PostModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\PostsModule\Post\PostModel recent()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class PostModel{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface[] all() 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface first() 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface[] get($key, $default=null) 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface find($key, $default=null) 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface findBy($key, $value) 
 */
class PostCollection{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostCriteria
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PostCriteria{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PostObserver{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Post\PostModel
 */
class PostPresenter{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\Contract\PostInterface[] all(array $ids) 
 * @method \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\Contract\PostInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\Contract\PostInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\Contract\PostInterface[] findAll(array $ids) 
 * @method \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\Contract\PostInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface first($direction = "asc") 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface find($id) 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface findBy($key, $value) 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface create(array $attributes = []) 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface getModel() 
 * @method \Anomaly\PostsModule\Post\Contract\PostInterface newInstance(array $attributes = []) 
 */
class PostRepository{}
}
namespace Anomaly\PostsModule\Post {
/**
 * Class PostSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class PostSeeder{}
}
namespace Anomaly\PostsModule\Post\Contract {
/**
 * Interface PostInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Post\PostModel
 */
class PostInterface{}
}
namespace Anomaly\PostsModule\Post\Contract {
/**
 * Interface PostRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Post\PostRepository
 */
class PostRepositoryInterface{}
}
namespace Anomaly\PostsModule\Type {
/**
 * Class TypeModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property string $layout
 * @property string $theme_layout
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\PostsModule\Post\PostCollection|\Anomaly\PostsModule\Post\PostModel[] $posts
 * @property int|null $posts_count
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Posts\PostsTypesEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\PostsModule\Type\TypeModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Type\TypeModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Type\TypeModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\PostsModule\Type\TypeModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class TypeModel{}
}
namespace Anomaly\PostsModule\Type {
/**
 * Class TypeObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class TypeObserver{}
}
namespace Anomaly\PostsModule\Type {
/**
 * Class TypeRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Type\Contract\TypeInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Type\Contract\TypeInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Type\Contract\TypeInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Type\Contract\TypeInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\PostsModule\Type\Contract\TypeInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\PostsModule\Type\Contract\TypeInterface first($direction = "asc") 
 * @method \Anomaly\PostsModule\Type\Contract\TypeInterface find($id) 
 * @method \Anomaly\PostsModule\Type\Contract\TypeInterface findBy($key, $value) 
 * @method \Anomaly\PostsModule\Type\Contract\TypeInterface create(array $attributes = []) 
 * @method \Anomaly\PostsModule\Type\Contract\TypeInterface getModel() 
 * @method \Anomaly\PostsModule\Type\Contract\TypeInterface newInstance(array $attributes = []) 
 */
class TypeRepository{}
}
namespace Anomaly\PostsModule\Type {
/**
 * Class TypeSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class TypeSeeder{}
}
namespace Anomaly\PostsModule\Type\Contract {
/**
 * Interface TypeInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Type\TypeModel
 */
class TypeInterface{}
}
namespace Anomaly\PostsModule\Type\Contract {
/**
 * Interface TypeRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\PostsModule\Type\TypeRepository
 */
class TypeRepositoryInterface{}
}
namespace Anomaly\RedirectsModule\Domain {
/**
 * Class DomainModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $from
 * @property string|null $to
 * @property string $status
 * @property int|null $secure
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\RedirectsModule\Domain\DomainModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\RedirectsModule\Domain\DomainModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\RedirectsModule\Domain\DomainModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\RedirectsModule\Domain\DomainModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class DomainModel{}
}
namespace Anomaly\RedirectsModule\Domain {
/**
 * Class DomainObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class DomainObserver{}
}
namespace Anomaly\RedirectsModule\Domain {
/**
 * \Anomaly\RedirectsModule\Domain\DomainRepository
 *
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Domain\Contract\DomainInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Domain\Contract\DomainInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Domain\Contract\DomainInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Domain\Contract\DomainInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Domain\Contract\DomainInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\RedirectsModule\Domain\Contract\DomainInterface first($direction = "asc") 
 * @method \Anomaly\RedirectsModule\Domain\Contract\DomainInterface find($id) 
 * @method \Anomaly\RedirectsModule\Domain\Contract\DomainInterface findBy($key, $value) 
 * @method \Anomaly\RedirectsModule\Domain\Contract\DomainInterface create(array $attributes = []) 
 * @method \Anomaly\RedirectsModule\Domain\Contract\DomainInterface getModel() 
 * @method \Anomaly\RedirectsModule\Domain\Contract\DomainInterface newInstance(array $attributes = []) 
 */
class DomainRepository{}
}
namespace Anomaly\RedirectsModule\Domain\Contract {
/**
 * Interface DomainInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\RedirectsModule\Domain\DomainModel
 */
class DomainInterface{}
}
namespace Anomaly\RedirectsModule\Domain\Contract {
/**
 * \Anomaly\RedirectsModule\Domain\Contract\DomainRepositoryInterface
 *
 * @mixin \Anomaly\RedirectsModule\Domain\DomainRepository
 */
class DomainRepositoryInterface{}
}
namespace Anomaly\RedirectsModule\Redirect {
/**
 * Class RedirectModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $from
 * @property string $to
 * @property string $status
 * @property int|null $secure
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\RedirectsModule\Redirect\RedirectModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\RedirectsModule\Redirect\RedirectModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\RedirectsModule\Redirect\RedirectModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\RedirectsModule\Redirect\RedirectModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class RedirectModel{}
}
namespace Anomaly\RedirectsModule\Redirect {
/**
 * Class RedirectObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class RedirectObserver{}
}
namespace Anomaly\RedirectsModule\Redirect {
/**
 * Class RedirectRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Entry\EntryCollection|\Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface first($direction = "asc") 
 * @method \Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface find($id) 
 * @method \Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface findBy($key, $value) 
 * @method \Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface create(array $attributes = []) 
 * @method \Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface getModel() 
 * @method \Anomaly\RedirectsModule\Redirect\Contract\RedirectInterface newInstance(array $attributes = []) 
 */
class RedirectRepository{}
}
namespace Anomaly\RedirectsModule\Redirect\Contract {
/**
 * Interface RedirectInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\RedirectsModule\Redirect\RedirectModel
 */
class RedirectInterface{}
}
namespace Anomaly\RedirectsModule\Redirect\Contract {
/**
 * Interface RedirectRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\RedirectsModule\Redirect\RedirectRepository
 */
class RedirectRepositoryInterface{}
}
namespace Anomaly\SearchModule\Item {
/**
 * Class ItemModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property string|null $title
 * @property string|null $description
 * @property string|null $keywords
 * @property int $entry_id
 * @property string $entry_type
 * @property int $stream_id
 * @property string $locale
 * @property string|null $searchable
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Anomaly\SearchModule\Item\ItemModel $entry
 * @property mixed|null $raw
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\SearchModule\Item\ItemModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\SearchModule\Item\ItemModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\SearchModule\Item\ItemModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\SearchModule\Item\ItemModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class ItemModel{}
}
namespace Anomaly\SearchModule\Item {
/**
 * \Anomaly\SearchModule\Item\ItemCollection
 *
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface[] all() 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface first() 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface[] get($key, $default=null) 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface find($key, $default=null) 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface findBy($key, $value) 
 */
class ItemCollection{}
}
namespace Anomaly\SearchModule\Item {
/**
 * Class ItemRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\SearchModule\Item\ItemCollection|\Anomaly\SearchModule\Item\Contract\ItemInterface[] all(array $ids) 
 * @method \Anomaly\SearchModule\Item\ItemCollection|\Anomaly\SearchModule\Item\Contract\ItemInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\SearchModule\Item\ItemCollection|\Anomaly\SearchModule\Item\Contract\ItemInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\SearchModule\Item\ItemCollection|\Anomaly\SearchModule\Item\Contract\ItemInterface[] findAll(array $ids) 
 * @method \Anomaly\SearchModule\Item\ItemCollection|\Anomaly\SearchModule\Item\Contract\ItemInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface first($direction = "asc") 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface find($id) 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface findBy($key, $value) 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface create(array $attributes = []) 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface getModel() 
 * @method \Anomaly\SearchModule\Item\Contract\ItemInterface newInstance(array $attributes = []) 
 */
class ItemRepository{}
}
namespace Anomaly\SearchModule\Item\Contract {
/**
 * Interface ItemInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\SearchModule\Item\ItemModel
 */
class ItemInterface{}
}
namespace Anomaly\SearchModule\Item\Contract {
/**
 * Interface ItemRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\SearchModule\Item\ItemRepository
 */
class ItemRepositoryInterface{}
}
namespace Anomaly\UsersModule\Role {
/**
 * Class RoleModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $slug
 * @property string|null $permissions
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\Users\UsersRolesEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\UsersModule\User\UserCollection|\Anomaly\UsersModule\User\UserModel[] $users
 * @property int|null $users_count
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\UsersModule\Role\RoleModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\UsersModule\Role\RoleModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\UsersModule\Role\RoleModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\UsersModule\Role\RoleModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class RoleModel{}
}
namespace Anomaly\UsersModule\Role {
/**
 * Class RoleCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface[] all() 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface first() 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface[] get($key, $default=null) 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface find($key, $default=null) 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface findBy($key, $value) 
 */
class RoleCollection{}
}
namespace Anomaly\UsersModule\Role {
/**
 * Class RolePresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\UsersModule\Role\RoleModel
 */
class RolePresenter{}
}
namespace Anomaly\UsersModule\Role {
/**
 * Class RoleRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\Contract\RoleInterface[] all(array $ids) 
 * @method \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\Contract\RoleInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\Contract\RoleInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\Contract\RoleInterface[] findAll(array $ids) 
 * @method \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\Contract\RoleInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface first($direction = "asc") 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface find($id) 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface findBy($key, $value) 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface create(array $attributes = []) 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface getModel() 
 * @method \Anomaly\UsersModule\Role\Contract\RoleInterface newInstance(array $attributes = []) 
 */
class RoleRepository{}
}
namespace Anomaly\UsersModule\Role {
/**
 * Class RoleSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class RoleSeeder{}
}
namespace Anomaly\UsersModule\Role\Contract {
/**
 * Interface RoleInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\UsersModule\Role\RoleModel
 */
class RoleInterface{}
}
namespace Anomaly\UsersModule\Role\Contract {
/**
 * Interface RoleRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\UsersModule\Role\RoleRepository
 */
class RoleRepositoryInterface{}
}
namespace Anomaly\UsersModule\User {
/**
 * Class UserModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $email
 * @property string $username
 * @property string $password
 * @property string $display_name
 * @property string|null $first_name
 * @property string|null $last_name
 * @property int|null $activated
 * @property int|null $enabled
 * @property string|null $permissions
 * @property \Illuminate\Support\Carbon|null $last_login_at
 * @property string|null $remember_token
 * @property string|null $activation_code
 * @property string|null $reset_code
 * @property \Illuminate\Support\Carbon|null $last_activity_at
 * @property string|null $ip_address
 * @property string $str_id
 * @property int|null $department_id
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property \Examples\Ex1Module\Department\DepartmentModel|null $department
 * @property mixed|null $raw
 * @property \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property int|null $notifications_count
 * @property \Anomaly\UsersModule\Role\RoleCollection|\Anomaly\UsersModule\Role\RoleModel[] $roles
 * @property int|null $roles_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\UsersModule\User\UserModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\UsersModule\User\UserModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\UsersModule\User\UserModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\UsersModule\User\UserModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class UserModel{}
}
namespace Anomaly\UsersModule\User {
/**
 * Class UserCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\UsersModule\User\Contract\UserInterface[] all() 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface first() 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface[] get($key, $default=null) 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface find($key, $default=null) 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface findBy($key, $value) 
 */
class UserCollection{}
}
namespace Anomaly\UsersModule\User {
/**
 * Class UserObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class UserObserver{}
}
namespace Anomaly\UsersModule\User {
/**
 * Class UserPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\UsersModule\User\UserModel
 */
class UserPresenter{}
}
namespace Anomaly\UsersModule\User {
/**
 * Class UserRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\UsersModule\User\UserCollection|\Anomaly\UsersModule\User\Contract\UserInterface[] all(array $ids) 
 * @method \Anomaly\UsersModule\User\UserCollection|\Anomaly\UsersModule\User\Contract\UserInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\UsersModule\User\UserCollection|\Anomaly\UsersModule\User\Contract\UserInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\UsersModule\User\UserCollection|\Anomaly\UsersModule\User\Contract\UserInterface[] findAll(array $ids) 
 * @method \Anomaly\UsersModule\User\UserCollection|\Anomaly\UsersModule\User\Contract\UserInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface first($direction = "asc") 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface find($id) 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface findBy($key, $value) 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface create(array $attributes = []) 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface getModel() 
 * @method \Anomaly\UsersModule\User\Contract\UserInterface newInstance(array $attributes = []) 
 */
class UserRepository{}
}
namespace Anomaly\UsersModule\User {
/**
 * \Anomaly\UsersModule\User\UserRouter
 *
 */
class UserRouter{}
}
namespace Anomaly\UsersModule\User {
/**
 * Class UserSeeder
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class UserSeeder{}
}
namespace Anomaly\UsersModule\User\Contract {
/**
 * Interface UserInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\UsersModule\User\UserModel
 */
class UserInterface{}
}
namespace Anomaly\UsersModule\User\Contract {
/**
 * Interface UserRepositoryInterface
 *
 * @method null|UserInterface find($id)
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\UsersModule\User\UserRepository
 */
class UserRepositoryInterface{}
}
namespace Anomaly\WysiwygBlockExtension\Block {
/**
 * \Anomaly\WysiwygBlockExtension\Block\BlockModel
 *
 * @property int $id
 * @property int|null $sort_order
 * @property \Illuminate\Support\Carbon $created_at
 * @property int|null $created_by_id
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $updated_by_id
 * @property \Anomaly\UsersModule\User\UserModel|null $createdBy
 * @property mixed|null $raw
 * @property \Anomaly\Streams\Platform\Model\EloquentCollection|\Anomaly\Streams\Platform\Model\WysiwygBlock\WysiwygBlockBlocksEntryTranslationsModel[] $translations
 * @property int|null $translations_count
 * @property \Anomaly\UsersModule\User\UserModel|null $updatedBy
 * @property \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\VersionModel[] $versions
 * @property int|null $versions_count
 * @method static \Anomaly\WysiwygBlockExtension\Block\BlockModel make($attributes=[])
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\WysiwygBlockExtension\Block\BlockModel newModelQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\WysiwygBlockExtension\Block\BlockModel newQuery()
 * @method static \Anomaly\Streams\Platform\Entry\EntryQueryBuilder|\Anomaly\WysiwygBlockExtension\Block\BlockModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Entry\EntryModel sorted($direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\Anomaly\Streams\Platform\Model\EloquentModel translatedIn($locale)
 */
class BlockModel{}
}
namespace Anomaly\WysiwygBlockExtension\Block\Contract {
/**
 * \Anomaly\WysiwygBlockExtension\Block\Contract\BlockInterface
 *
 * @mixin \Anomaly\WysiwygBlockExtension\Block\BlockModel
 */
class BlockInterface{}
}
namespace Examples\Ex1Module\Department {
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
class DepartmentModel{}
}
namespace Examples\Ex1Module\Department {
/**
 * \Examples\Ex1Module\Department\DepartmentCollection
 *
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface[] all() 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface first() 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface[] get($key, $default=null) 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface find($key, $default=null) 
 * @method \Examples\Ex1Module\Department\Contract\DepartmentInterface findBy($key, $value) 
 */
class DepartmentCollection{}
}
namespace Examples\Ex1Module\Department {
/**
 * \Examples\Ex1Module\Department\DepartmentCriteria
 *
 */
class DepartmentCriteria{}
}
namespace Examples\Ex1Module\Department {
/**
 * \Examples\Ex1Module\Department\DepartmentObserver
 *
 */
class DepartmentObserver{}
}
namespace Examples\Ex1Module\Department {
/**
 * \Examples\Ex1Module\Department\DepartmentPresenter
 *
 * @mixin \Examples\Ex1Module\Department\DepartmentModel
 */
class DepartmentPresenter{}
}
namespace Examples\Ex1Module\Department {
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
class DepartmentRepository{}
}
namespace Examples\Ex1Module\Department {
/**
 * \Examples\Ex1Module\Department\DepartmentRouter
 *
 */
class DepartmentRouter{}
}
namespace Examples\Ex1Module\Department {
/**
 * \Examples\Ex1Module\Department\DepartmentSeeder
 *
 */
class DepartmentSeeder{}
}
namespace Examples\Ex1Module\Department\Contract {
/**
 * \Examples\Ex1Module\Department\Contract\DepartmentInterface
 *
 * @mixin \Examples\Ex1Module\Department\DepartmentModel
 */
class DepartmentInterface{}
}
namespace Examples\Ex1Module\Department\Contract {
/**
 * \Examples\Ex1Module\Department\Contract\DepartmentRepositoryInterface
 *
 * @mixin \Examples\Ex1Module\Department\DepartmentRepository
 */
class DepartmentRepositoryInterface{}
}
namespace Anomaly\Streams\Platform\Assignment {
/**
 * Class AssignmentModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class AssignmentModel{}
}
namespace Anomaly\Streams\Platform\Assignment {
/**
 * Class AssignmentCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] all() 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface first() 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] get($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface find($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface findBy($key, $value) 
 */
class AssignmentCollection{}
}
namespace Anomaly\Streams\Platform\Assignment {
/**
 * Class AssignmentObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class AssignmentObserver{}
}
namespace Anomaly\Streams\Platform\Assignment {
/**
 * Class AssignmentPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Assignment\AssignmentModel
 */
class AssignmentPresenter{}
}
namespace Anomaly\Streams\Platform\Assignment {
/**
 * Class AssignmentRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Assignment\AssignmentCollection|\Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Assignment\AssignmentCollection|\Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Assignment\AssignmentCollection|\Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Assignment\AssignmentCollection|\Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Assignment\AssignmentCollection|\Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface first($direction = "asc") 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface find($id) 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface findBy($key, $value) 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface create(array $attributes = []) 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface getModel() 
 * @method \Anomaly\Streams\Platform\Assignment\Contract\AssignmentInterface newInstance(array $attributes = []) 
 */
class AssignmentRepository{}
}
namespace Anomaly\Streams\Platform\Assignment {
/**
 * Class AssignmentRouter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class AssignmentRouter{}
}
namespace Anomaly\Streams\Platform\Assignment\Contract {
/**
 * Interface AssignmentInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Assignment\AssignmentModel
 */
class AssignmentInterface{}
}
namespace Anomaly\Streams\Platform\Assignment\Contract {
/**
 * Interface AssignmentRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Assignment\AssignmentRepository
 */
class AssignmentRepositoryInterface{}
}
namespace Anomaly\Streams\Platform\Stream {
/**
 * Class StreamModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class StreamModel{}
}
namespace Anomaly\Streams\Platform\Stream {
/**
 * Class StreamCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] all() 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface first() 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] get($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface find($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface findBy($key, $value) 
 */
class StreamCollection{}
}
namespace Anomaly\Streams\Platform\Stream {
/**
 * Class StreamObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class StreamObserver{}
}
namespace Anomaly\Streams\Platform\Stream {
/**
 * Class StreamPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Stream\StreamModel
 */
class StreamPresenter{}
}
namespace Anomaly\Streams\Platform\Stream {
/**
 * Class StreamRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Stream\StreamCollection|\Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Stream\StreamCollection|\Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Stream\StreamCollection|\Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Stream\StreamCollection|\Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Stream\StreamCollection|\Anomaly\Streams\Platform\Stream\Contract\StreamInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface first($direction = "asc") 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface find($id) 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface findBy($key, $value) 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface create(array $attributes = []) 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface getModel() 
 * @method \Anomaly\Streams\Platform\Stream\Contract\StreamInterface newInstance(array $attributes = []) 
 */
class StreamRepository{}
}
namespace Anomaly\Streams\Platform\Stream\Contract {
/**
 * Interface StreamInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Stream\StreamModel
 */
class StreamInterface{}
}
namespace Anomaly\Streams\Platform\Stream\Contract {
/**
 * Interface StreamRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Stream\StreamRepository
 */
class StreamRepositoryInterface{}
}
namespace Anomaly\Streams\Platform\Version {
/**
 * Class VersionModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class VersionModel{}
}
namespace Anomaly\Streams\Platform\Version {
/**
 * Class VersionCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface[] all() 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface first() 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface[] get($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface find($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface findBy($key, $value) 
 */
class VersionCollection{}
}
namespace Anomaly\Streams\Platform\Version {
/**
 * Class VersionPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Version\VersionModel
 */
class VersionPresenter{}
}
namespace Anomaly\Streams\Platform\Version {
/**
 * Class VersionRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\Contract\VersionInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\Contract\VersionInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\Contract\VersionInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\Contract\VersionInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Version\VersionCollection|\Anomaly\Streams\Platform\Version\Contract\VersionInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface first($direction = "asc") 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface find($id) 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface findBy($key, $value) 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface create(array $attributes = []) 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface getModel() 
 * @method \Anomaly\Streams\Platform\Version\Contract\VersionInterface newInstance(array $attributes = []) 
 */
class VersionRepository{}
}
namespace Anomaly\Streams\Platform\Version {
/**
 * Class VersionRouter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class VersionRouter{}
}
namespace Anomaly\Streams\Platform\Version\Contract {
/**
 * Interface VersionInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Version\VersionModel
 */
class VersionInterface{}
}
namespace Anomaly\Streams\Platform\Version\Contract {
/**
 * Interface VersionRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Version\VersionRepository
 */
class VersionRepositoryInterface{}
}
namespace Anomaly\Streams\Platform\Field {
/**
 * Class FieldModel
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FieldModel{}
}
namespace Anomaly\Streams\Platform\Field {
/**
 * Class FieldCollection
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface[] all() 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface first() 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface[] get($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface find($key, $default=null) 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface findBy($key, $value) 
 */
class FieldCollection{}
}
namespace Anomaly\Streams\Platform\Field {
/**
 * Class FieldObserver
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FieldObserver{}
}
namespace Anomaly\Streams\Platform\Field {
/**
 * Class FieldPresenter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Field\FieldModel
 */
class FieldPresenter{}
}
namespace Anomaly\Streams\Platform\Field {
/**
 * Class FieldRepository
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @method \Anomaly\Streams\Platform\Field\FieldCollection|\Anomaly\Streams\Platform\Field\Contract\FieldInterface[] all(array $ids) 
 * @method \Anomaly\Streams\Platform\Field\FieldCollection|\Anomaly\Streams\Platform\Field\Contract\FieldInterface[] allWithTrashed(array $ids) 
 * @method \Anomaly\Streams\Platform\Field\FieldCollection|\Anomaly\Streams\Platform\Field\Contract\FieldInterface[] allWithoutRelations(array $ids) 
 * @method \Anomaly\Streams\Platform\Field\FieldCollection|\Anomaly\Streams\Platform\Field\Contract\FieldInterface[] findAll(array $ids) 
 * @method \Anomaly\Streams\Platform\Field\FieldCollection|\Anomaly\Streams\Platform\Field\Contract\FieldInterface[] findAllBy(string $key, $value) 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface first($direction = "asc") 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface find($id) 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface findBy($key, $value) 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface create(array $attributes = []) 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface getModel() 
 * @method \Anomaly\Streams\Platform\Field\Contract\FieldInterface newInstance(array $attributes = []) 
 */
class FieldRepository{}
}
namespace Anomaly\Streams\Platform\Field {
/**
 * Class FieldRouter
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 */
class FieldRouter{}
}
namespace Anomaly\Streams\Platform\Field\Contract {
/**
 * Interface FieldInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Field\FieldModel
 */
class FieldInterface{}
}
namespace Anomaly\Streams\Platform\Field\Contract {
/**
 * Interface FieldRepositoryInterface
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @mixin \Anomaly\Streams\Platform\Field\FieldRepository
 */
class FieldRepositoryInterface{}
}
namespace Anomaly\Streams\Platform\Addon {
/**
 * Class AddonServiceProvider
 *
 * @link http://pyrocms.com/
 * @author PyroCMS, Inc. <support@pyrocms.com>
 * @author Ryan Thompson <ryan@pyrocms.com>
 * @property array $routes  = [
 *     $i => [
 *          'as' => '',
 *          'uses' => '',
 *          'verb' => '',
 *          'ttl' => 0,
 *          'csrf' => true,
 *          'middleware' => [],
 *          'where' => [],
 *          'streams::httpcache'  => false,
 *          'streams::addon' => '',
 * 
 *          'anomaly.module.users::permission' => 'vendor.module.example::widgets.test',
 *          'anomaly.module.users::permission' => ['vendor.module.example::widgets.test'],
 * 
 *          'anomaly.module.users::role' => 'vendor.module.example::widgets.test',
 *          'anomaly.module.users::role' => ['vendor.module.example::widgets.test'],
 * 
 *          'anomaly.module.users::redirect' => '/',
 *          'anomaly.module.users::route' => 'vendor.module.example::route.name',
 *          'anomaly.module.users::intended' => ''
 *          'anomaly.module.users::message' => 'Sorry, you do not have access.',
 *      ]
 * ] 
 */
class AddonServiceProvider{}
}