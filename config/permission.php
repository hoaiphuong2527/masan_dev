<?php
return [
    'permission' => [
        'model' => 'Admin',
        'permissions' => [
            'admin.index' => 'View'
        ]
    ],

    // 'project_category' => [
    //     'model' => 'Danh mục dự án',
    //     'permissions' => [
    //         'admin.project.category.index' => 'View',
    //         'admin.project.category.create' => 'Create',
    //         'admin.project.category.edit' => 'Edit',
    //         'admin.project.category.destroy' => 'Delete'
    //     ]
    // ],

    // 'project' => [
    //     'model' => 'Dự án',
    //     'permissions' => [
    //         'admin.project.index' => 'View',
    //         'admin.project.create' => 'Create',
    //         'admin.project.edit' => 'Edit',
    //         'admin.project.destroy' => 'Delete',
    //     ]
    // ],

//    'product_category' => [
//        'model' => 'Product category',
//        'permissions' => [
//            'admin.product.category.index' => 'Product category index',
//            'admin.product.category.create' => 'Create product category',
//            'admin.product.category.edit' => 'Edit product category',
//            'admin.product.category.destroy' => 'Delete product category',
//        ]
//    ],

//    'product' => [
//        'model' => 'Sản phẩm',
//        'permissions' => [
//            'admin.product.index' => 'View',
//            'admin.product.create' => 'Create',
//            'admin.product.edit' => 'Edit',
//            'admin.product.destroy' => 'Delete'
//        ]
//    ],

    // 'invest_category' => [
    //     'model' => 'Loại tin tức đầu tư',
    //     'permissions' => [
    //         'admin.invest.category.index' => 'View',
    //         'admin.invest.category.create' => 'Create',
    //         'admin.invest.category.edit' => 'Edit',
    //         'admin.invest.category.destroy' => 'Delete'
    //     ]
    // ],
    'investments' => [
        'model' => 'Invester Centor',
        'permissions' => [
            'admin.investments.index' => 'View',
            'admin.investments.create' => 'Create',
            'admin.investments.edit' => 'Edit',
            'admin.investments.destroy' => 'Delete'
        ]
    ],

    // 'news_category' => [
    //     'model' => 'Loại tin tức',
    //     'permissions' => [
    //         'admin.news.category.index' => 'View',
    //         'admin.news.category.create' => 'Create',
    //         'admin.news.category.edit' => 'Edit',
    //         'admin.news.category.destroy' => 'Delete'
    //     ]
    // ],

    'news' => [
        'model' => 'News',
        'permissions' => [
            'admin.news.index' => 'View',
            'admin.news.create' => 'Create',
            'admin.news.edit' => 'Edit',
            'admin.news.destroy' => 'Delete',
        ]
    ],

    // 'service' => [
    //     'model' => 'Dịch vụ',
    //     'permissions' => [
    //         'admin.service.index' => 'View',
    //         'admin.service.create' => 'Create',
    //         'admin.service.edit' => 'Edit',
    //         'admin.service.destroy' => 'Delete',
    //     ]
    // ],

    // 'brochures' => [
    //     'model' => 'Tài liệu quảng cáo',
    //     'permissions' => [
    //         'admin.brochures.index' => 'View',
    //         'admin.brochures.create' => 'Create',
    //         'admin.brochures.edit' => 'Edit',
    //         'admin.brochures.destroy' => 'Delete',
    //     ]
    // ],



    // 'theme' => [
    //     'model' => 'Bản mẫu',
    //     'permissions' => [
    //         'admin.theme.index' => 'View',
    //         'admin.theme.create' => 'Create',
    //         'admin.theme.edit' => 'Edit',
    //         'admin.theme.destroy' => 'Delete',
    //     ]
    // ],

    'page' => [
        'model' => 'Page',
        'permissions' => [
            'admin.page.index' => 'View',
            'admin.page.create' => 'Create',
            'admin.page.edit' => 'Edit',
            'admin.page.destroy' => 'Delete'
        ]
    ],

    // 'career' => [
    //     'model' => 'Tuyển dụng',
    //     'permissions' => [
    //         'admin.career.index' => 'View',
    //         'admin.career.create' => 'Create',
    //         'admin.career.edit' => 'Edit',
    //         'admin.career.destroy' => 'Delete',
    //         'admin.career.application' => 'Ứng tuyển'
    //     ]
    // ],

    // 'branch' => [
    //     'model' => 'Branch',
    //     'permissions' => [
    //         'admin.branch.index' => 'Branch index',
    //         'admin.branch.create' => 'Create branch',
    //         'admin.branch.edit' => 'Edit branch',
    //         'admin.branch.destroy' => 'Delete branch'
    //     ]
    // ],

    'contact' => [
        'model' => 'Contact',
        'permissions' => [
            'admin.contact.index' => 'View',
            'admin.contact.destroy' => 'Delete'
        ]
    ],

    // 'register' => [
    //     'model' => 'Đăng ký theo dõi',
    //     'permissions' => [
    //         'admin.register.index' => 'View',
    //         'admin.register.destroy' => 'Delete'
    //     ]
    // ],

    // 'subscribe' => [
    //     'model' => 'Subscribe',
    //     'permissions' => [
    //         'admin.subscribe.index' => 'View',
    //         'admin.subscribe.destroy' => 'Delete'
    //     ]
    // ],


//    'rfp' => [
//        'model' => 'Rfp',
//        'permissions' => [
//            'admin.rfp.index' => 'View',
//            'admin.rfp.destroy' => 'Delete'
//        ]
//    ],

//    'faq' => [
//        'model' => 'FAQs',
//        'permissions' => [
//            'admin.faq.index' => 'View',
//            'admin.faq.create' => 'Create',
//            'admin.faq.edit' => 'Edit',
//            'admin.faq.destroy' => 'Delete'
//        ]
//    ],

//    'image360' => [
//        'model' => 'Image 360',
//        'permissions' => [
//            'admin.image360.index' => 'Image 360 index',
//            'admin.image360.create' => 'Create image 360',
//            'admin.image360.edit' => 'Edit image 360',
//            'admin.image360.destroy' => 'Delete image 360'
//        ]
//    ],

    // 'slider' => [
    //     'model' => 'Băng rôn',
    //     'permissions' => [
    //         'admin.slider.index' => 'View',
    //         'admin.slider.create' => 'Create',
    //         'admin.slider.edit' => 'Edit',
    //         'admin.slider.destroy' => 'Delete'
    //     ]
    // ],

//    'image_map' => [
//        'model' => 'Bản đồ hình ảnh',
//        'permissions' => [
//            'admin.image.map.index' => 'View',
//            'admin.image.map.create' => 'Create',
//            'admin.image.map.edit' => 'Edit',
//            'admin.image.map.destroy' => 'Delete',
//        ]
//    ],

    // 'partner' => [
    //     'model' => 'Đối tác',
    //     'permissions' => [
    //         'admin.partner.index' => 'View',
    //         'admin.partner.create' => 'Create',
    //         'admin.partner.edit' => 'Edit',
    //         'admin.partner.destroy' => 'Delete'
    //     ]
    // ],

    // 'team' => [
    //     'model' => 'Đội ngũ',
    //     'permissions' => [
    //         'admin.team.index' => 'View',
    //         'admin.team.create' => 'Create',
    //         'admin.team.edit' => 'Edit',
    //         'admin.team.destroy' => 'Delete'
    //     ]
    // ],

//    'book_space' => [
//        'model' => 'Đăng ký đặt chỗ',
//        'permissions' => [
//            'admin.book.space.index' => 'View',
//            'admin.book.space.show' => 'Hiển thị',
//            'admin.book.space.destroy' => 'Delete'
//        ]
//    ],

//    'visit_registration' => [
//        'model' => 'Đăng ký tham quan',
//        'permissions' => [
//            'admin.visit.registration.index' => 'View',
//            'admin.visit.registration.show' => 'Hiển thị',
//            'admin.visit.registration.destroy' => 'Delete'
//        ]
//    ],

    // 'general' => [
    //     'model' => 'Thông tin chung',
    //     'permissions' => [
    //         'admin.general.index' => 'View',
    //         'admin.general.create' => 'Create',
    //         'admin.general.edit' => 'Edit',
    //         'admin.general.destroy' => 'Delete'
    //     ]
    // ],

    'user' => [
        'model' => 'User',
        'permissions' => [
            'admin.user.index' => 'View',
            'admin.user.create' => 'Create',
            'admin.user.edit' => 'Edit',
            'admin.user.destroy' => 'Delete',
            'admin.user.set.permission' => 'Set role'
        ]
    ],

    'role' => [
        'model' => 'Role',
        'permissions' => [
            'admin.role.index' => 'View',
            'admin.role.create' => 'Create',
            'admin.role.edit' => 'Edit',
            'admin.role.destroy' => 'Delete'
        ]
    ],

    'system' => [
        'model' => 'System',
        'permissions' => [
            'admin.system.edit' => 'Edit',
        ]
    ],

    'activity' => [
        'model' => 'Activity Log',
        'permissions' => [
            'admin.activity.index' => 'View',
        ]
    ],

    'gallery' => [
        'model' => 'Library',
        'permissions' => [
            'admin.gallery.index' => 'View',
            'admin.gallery.create' => 'Create',
            'admin.gallery.edit' => 'Edit',
            'admin.gallery.destroy' => 'Delete'
        ]
    ],

//    'catalogue' => [
//        'model' => 'Catalogue',
//        'permissions' => [
//            'admin.catalogue.index' => 'View',
//            'admin.catalogue.create' => 'Create',
//            'admin.catalogue.edit' => 'Edit',
//            'admin.catalogue.destroy' => 'Delete'
//        ]
//    ],
];
