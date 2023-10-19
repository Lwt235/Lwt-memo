const router = new router({
    mode: 'history',
    routes: [
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta:{
                // 页面标题title
                title: '首页'
            }
        },
        {
            path: '/content',
            name: 'content',
            component: Content,
            meta:{
                title: '内容'
            }
        }
    ]
})
export default router
