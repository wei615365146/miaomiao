export default {
    path: '/admin',
    component: () => import('@/views/Admin'),
    children: [
        {
            path: 'users',
            component: () => import('@/views/Admin/users')
        },
        {
            path: 'movie',
            component: () => import('@/views/Admin/movie')
        },
        {
            path: 'cinema',
            component: () => import('@/views/Admin/cinema')
        },
        {
            path:'/admin',
            redirect:'users'
       }
    ]

}