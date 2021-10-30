import React from 'react'
import { authRoles } from '../../auth/authRoles'
const productRoutes = [
    {
        path: '/product/addProduct',
        component: React.lazy(() => import('./add-product/AddProduct')),
        auth: authRoles.admin,
    },
    {
        path: '/product/products',
        component: React.lazy(() => import('./product-list/ProductList')),
        auth: authRoles.admin,
    },
    {
        path: '/product/updateProducts',
        component: React.lazy(() => import('./product-list/ProductUpdateDialog')),
        auth: authRoles.admin,
    }
]

export default productRoutes
