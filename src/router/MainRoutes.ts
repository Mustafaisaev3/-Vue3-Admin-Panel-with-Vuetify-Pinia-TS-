import HomeView from '../views/HomeView.vue'

const MainRoutes = {
    path: '/main',
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/dashboard/ecommerce/index.vue'),
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'eCommerce',
            path: '/dashboards/ecommerce',
            component: () => import('../views/dashboard/ecommerce/index.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'contacts',
            path: '/apps/contacts',
            component: () => import('../views/apps/contacts/index.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Posts',
            path: '/apps/blog/posts',
            component: () => import('../views/apps/blog/Posts.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Detail',
            path: '/apps/blog/:id',
            component: () => import('../views/apps/blog/Detail.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Products',
            path: '/apps/ecommerce/products',
            component: () => import('../views/apps/eCommerce/Products.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Product detail',
            path: '/apps/ecommerce/product/detail/:id',
            component: () => import('@/views/apps/eCommerce/ProductDetails.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Product Listing',
            path: '/apps/ecommerce/productlist',
            component: () => import('@/views/apps/eCommerce/ProductList.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Product Checkout',
            path: '/apps/ecommerce/checkout',
            component: () => import('@/views/apps/eCommerce/ProductCheckout.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Chats',
            path: '/apps/chats',
            component: () => import('@/views/apps/chat/Chats.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Calendar',
            path: '/apps/calendar',
            component: () => import('@/views/apps/calendar/Calendar.vue'),
            meta: {
                requiresAuth: true,
            },
          },
          {
            name: 'Notes',
            path: '/apps/notes',
            component: () => import('@/views/apps/notes/Notes.vue'),
            meta: {
                requiresAuth: true,
            },
          },
    ]
}

export default MainRoutes;