import React from 'react'

const cartRoutes = [
    {
        path: '/cart/cart-list',
        component: React.lazy(() => import('./cart-list/CartList'))
    }
]

export default cartRoutes;