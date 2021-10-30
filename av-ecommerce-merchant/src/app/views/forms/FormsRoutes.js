import React from 'react'
import { authRoles } from '../../auth/authRoles'
const formsRoutes = [
    {
        path: '/forms/basic',
        component: React.lazy(() => import('./BasicForm')),
    },
    {
        path: '/forms/editor',
        component: React.lazy(() => import('./EditorForm')),
    },
    {
        path: '/forms/upload',
        component: React.lazy(() => import('./UploadForm')),
    },
    {
        path: '/forms/invoice',
        component: React.lazy(() => import('./invoice-form/InvoiceForm')),
        auth: authRoles.admin,
    },
    {
        path: '/forms/invoiceFormat',
        component: React.lazy(() => import('./invoice-form/InvoiceFormat')),
        auth: authRoles.admin,
    },
    {
        path: '/forms/invoiceList',
        component: React.lazy(() => import('./invoice-list/InvoiceList')),
        auth: authRoles.admin,
    },
]

export default formsRoutes
