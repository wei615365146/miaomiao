export default {
 

    path: '/movie',
    component: () => import('@/views/Movie'),
    children : [
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path : 'detal/1/:id',
            components :{
                default:()=>import('@/components/NowPlaying'),
                detal:()=>import('@/views/Movie/detal')
            },
            props:{
                detal:true
            }
        },
        {
            path : 'detal/2/:id',
            components :{
                default:()=>import('@/components/ComingSoon'),
                detal:()=>import('@/views/Movie/detal')
            },
            props:{
                detal:true
            }
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path :'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path :'search',
            component: ()=> import('@/components/Search')
        }
    ]

}