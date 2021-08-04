<!-- #Top Bar -->
<section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info" style="height: 100px;">
            <div
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, .3)">
            </div>
            <div class="info-container">
                <div class="image pull-left">
                    <img src="/assets/admin/images/user.png" width="48" height="48" alt="User" />
                </div>
                <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ Auth::user()->name }}</div>
                <div class="email">{{ Auth::user()->email }}</div>
                <div class="btn-group user-helper-dropdown">
                    <i class="material-icons" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true">keyboard_arrow_down</i>
                    <ul class="dropdown-menu pull-right">
                        <li><a href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <i class="material-icons">input</i>{!! trans('admin_menu.sign_out') !!}</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
            <ul class="list">
                <!-- <li class="header"></li> -->
                <li class="{!! currentPageMenu(['*admin']) !!}">
                    <a href="/admin">
                        <i class="material-icons">dashboard</i>
                        <span>{!! trans('admin_menu.dashboard') !!}</span>
                    </a>
                </li>


                @if (in_array('admin.page.index', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/pages*', '*admin/themes*']) !!}">
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">pages</i>
                            <span>{!! trans('admin_menu.pages') !!}</span>
                        </a>
                        <ul class="ml-menu">
                            <li class="{!! currentPageMenu(['*admin/pages']) !!}">
                                <a href="{!! route('admin.page.index') !!}">
                                    <span>{!! trans('admin_menu.pages_list') !!}</span>
                                </a>
                            </li>

                            <li class="{!! currentPageMenu(['*admin/pages/create*']) !!}">
                                <a href="{!! route('admin.page.create') !!}">
                                    <span>{!! trans('admin_menu.create_page') !!}</span>
                                </a>
                            </li>


                        </ul>
                    </li>
                @endif


                @if (in_array('admin.news.index', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/news*']) !!}">
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">view_list</i>
                            <span>{!! trans('admin_menu.news') !!}</span>
                        </a>
                        <ul class="ml-menu">
                            <li class="{!! currentPageMenu(['*admin/news']) !!}">
                                <a href="{!! route('admin.news.index') !!}">
                                    <span>{!! trans('admin_menu.news_list') !!}</span>
                                </a>
                            </li>
                            <li class="{!! currentPageMenu(['*admin/news/create']) !!}">
                                <a href="{!! route('admin.news.create') !!}">
                                    <span>{!! trans('admin_menu.news_create') !!}</span>
                                </a>
                            </li>
                            <li class="{!! currentPageMenu(['*admin/news-categories*']) !!}">
                                <a href="{!! route('admin.news_category.index') !!}">
                                    <span>{!! trans('admin_menu.categories') !!}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
                @if (in_array('admin.investments.index', $composer_auth_permissions))

                    {{-- Custom invest news --}}
                    <li class="{!! currentPageMenu(['*admin/investments*']) !!}">
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">view_list</i>
                            <span>Investor Centor</span>
                        </a>
                        <ul class="ml-menu">
                            <li class="{!! currentPageMenu(['*admin/investments']) !!}">
                                <a href="{!! route('admin.investments.index') !!}">
                                    <span>News List</span>
                                </a>
                            </li>
                            <li class="{!! currentPageMenu(['*admin/investments/create']) !!}">
                                <a href="{!! route('admin.investments.create') !!}">
                                    <span>Create News</span>
                                </a>
                            </li>
                            <li class="{!! currentPageMenu(['*admin/investments-categories*']) !!}">
                                <a href="{!! route('admin.invest_category.index') !!}">
                                    <span>Categories</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {{-- Custom invest news --}}
                @endif

                @if (in_array('admin.contact.index', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/contacts*']) !!}">
                        <a href="{!! route('admin.contact.index') !!}">
                            <i class="material-icons">contact_mail</i>
                            <span>{!! trans('admin_menu.contacts') !!}</span>
                        </a>
                    </li>
                @endif

                @if (in_array('admin.gallery.index', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/gallery*']) !!}">
                        <a href="{!! route('admin.gallery.index') !!}">
                            <i class="material-icons">perm_media</i>
                            <span>{!! trans('admin_menu.gallery') !!}</span>
                        </a>
                    </li>
                @endif
                <!-- <li class="header"></li> -->

                @if (in_array('admin.activity.index', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/activity*']) !!}">
                        <a href="{!! route('admin.activity.index') !!}">
                            <i class="material-icons">settings</i>
                            <span>{!! trans('admin_menu.activity') !!}</span>
                        </a>
                    </li>
                @endif

                @if (in_array('admin.user.index', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/users*', '*admin/roles*']) !!}">
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">account_box</i>
                            <span>{!! trans('admin_menu.users') !!}</span>
                        </a>
                        <ul class="ml-menu">
                            <li class="{!! currentPageMenu(['*admin/users*']) !!}">
                                <a href="{!! route('admin.user.index') !!}">
                                    <span>{!! trans('admin_menu.users') !!}</span>
                                </a>
                            </li>
                            <li class="{!! currentPageMenu(['*admin/roles*']) !!}">
                                <a href="{!! route('admin.role.index') !!}">
                                    <span>{!! trans('admin_menu.roles') !!}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif

                @if (in_array('admin.system.edit', $composer_auth_permissions))
                    <li class="{!! currentPageMenu(['*admin/system*']) !!}">
                        <a href="{!! route('admin.system.edit', '0110') !!}">
                            <i class="material-icons">settings</i>
                            <span>{!! trans('admin_menu.system') !!}</span>
                        </a>
                    </li>
                @endif

                <li class="{!! currentPageMenu(['*']) !!} hidden">
                    <a></a>
                </li>
            </ul>
        </div>
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <div class="copyright">
                &copy;{!! date('Y') !!} <a href="javascript:void(0);">Admin {{ config('app.name') }}</a>
            </div>
        </div>
        <!-- #Footer -->
    </aside>
    <!-- #END# Left Sidebar -->
</section>
