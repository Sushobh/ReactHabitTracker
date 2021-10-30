import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
        auth: authRoles.admin
    },
    {
        label: 'Pages',
        path: '/pages',
        type: 'label',
    },
    {
        name: 'Employee',
        icon: 'people',
        auth: authRoles.sa,
        children: [
            {
                name: 'Employee List',
                path: '/employee/employee-list',
                iconText: 'A',
                auth: authRoles.sa
            },
            {
                name: 'Add Employee',
                path: '/employee/new-employee',
                iconText: 'A',
                auth: authRoles.sa
            }
        ]
    },
    {
        name: 'Vendor',
        icon: 'people',
        auth: authRoles.admin,
        children: [
            {
                name: 'Vendor List',
                path: '/customer/customer-list',
                iconText: 'A',
                auth: authRoles.admin
            },
            {
                name: 'Add Vendor',
                path: '/customer/new-customer',
                iconText: 'A',
                auth: authRoles.admin
            }
        ]
    },
    {
        name: 'Invoice',
        icon: 'favorite',
        auth: authRoles.admin,
        children: [
            {
                name: 'Invoice Forms',
                path: '/forms/invoice',
                iconText: 'A',
                auth: authRoles.admin
            },
            {
                name: 'Invoices',
                path: '/forms/invoiceList',
                iconText: 'A',
                auth: authRoles.admin
            }
        ]
    },
    {
        name: 'Purchase Order',
        icon: 'folder',
        auth: authRoles.admin,
        children: [
            {
                name: 'Generate PO',
                path: '/po/poform',
                iconText: 'A',
                auth: authRoles.admin
            },
            {
                name: 'Purchase Orders',
                path: '/po/polist',
                iconText: 'A',
                auth: authRoles.admin
            }
        ]
    },
    {
        name: 'Order',
        icon: 'shopping_basket',
        children: [
            {
                name: 'Order List',
                path: '/order/order-list',
                iconText: 'A',
            }
        ]
    },
    {
        name: 'Products',
        icon: 'shopping_cart',
        auth: authRoles.admin,
        children: [
            {
                name: 'Add Product',
                path: '/product/addProduct',
                iconText: 'A',
                auth: authRoles.admin
            },
            {
                name: 'Products',
                path: '/product/products',
                iconText: 'A',
                auth: authRoles.admin
            }
        ]
    },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },

    // {
    //     label: 'Components',
    //     type: 'label',
    // },
    // {
    //     name: 'Components',
    //     icon: 'favorite',
    //     badge: { value: '30+', color: 'secondary' },
    //     children: [
    //         {
    //             name: 'Auto Complete',
    //             path: '/material/autocomplete',
    //             iconText: 'A',
    //         },
    //         {
    //             name: 'Buttons',
    //             path: '/material/buttons',
    //             iconText: 'B',
    //         },
    //         {
    //             name: 'Checkbox',
    //             path: '/material/checkbox',
    //             iconText: 'C',
    //         },
    //         {
    //             name: 'Dialog',
    //             path: '/material/dialog',
    //             iconText: 'D',
    //         },
    //         {
    //             name: 'Drag and Drop',
    //             iconText: 'D',
    //             path: '/others/drag-and-drop',
    //         },
    //         {
    //             name: 'Expansion Panel',
    //             path: '/material/expansion-panel',
    //             iconText: 'E',
    //         },
    //         {
    //             name: 'Form',
    //             path: '/material/form',
    //             iconText: 'F',
    //         },
    //         {
    //             name: 'Icons',
    //             path: '/material/icons',
    //             iconText: 'I',
    //         },
    //         {
    //             name: 'Menu',
    //             path: '/material/menu',
    //             iconText: 'M',
    //         },
    //         {
    //             name: 'Progress',
    //             path: '/material/progress',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Radio',
    //             path: '/material/radio',
    //             iconText: 'R',
    //         },
    //         {
    //             name: 'Switch',
    //             path: '/material/switch',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Slider',
    //             path: '/material/slider',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Snackbar',
    //             path: '/material/snackbar',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Table',
    //             path: '/material/table',
    //             iconText: 'T',
    //         },
    //     ],
    // },
    // {
    //     name: 'Utilities',
    //     icon: 'format_list_bulleted',
    //     children: [
    //         {
    //             name: 'Color',
    //             path: '/utilities/color',
    //             iconText: 'C',
    //             auth: authRoles.admin,
    //         },
    //         {
    //             name: 'Spacing',
    //             path: '/utilities/spacing',
    //             iconText: 'S',
    //             auth: authRoles.admin,
    //         },
    //         {
    //             name: 'Typography',
    //             path: '/utilities/typography',
    //             iconText: 'T',
    //         },
    //         {
    //             name: 'Display',
    //             path: '/utilities/display',
    //             iconText: 'D',
    //         },
    //         {
    //             name: 'Position',
    //             path: '/utilities/position',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Shadow',
    //             path: '/utilities/shadow',
    //             iconText: 'S',
    //         },
    //     ],
    // },
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',
    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         }
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
