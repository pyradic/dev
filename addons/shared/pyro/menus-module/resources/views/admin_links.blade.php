<?php /**
 * @var Pyro\MenusModule\Link\LinkPresenter|\Pyro\MenusModule\Link\LinkModel                                           $link
 * @var Pyro\MenusModule\Link\LinkPresenter|\Pyro\MenusModule\Link\LinkModel                                           $child
 */ ?>

@if($link->children->isNotEmpty())
    <el-submenu index="{{$link->id}}">
        <template slot="title">{{$link->title}}</template>
        @each('pyro.module.menus::admin_links', $link->children, 'link')
    </el-submenu>
@else
    <el-menu-item index="{{$link->id}}">
        <i class="{{$link->icon}}"></i>
        <span>{{$link->title}}</span>
    </el-menu-item>
@endif
