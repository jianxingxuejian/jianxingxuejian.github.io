const routes: Route.Config = {
  path: '/list',
  name: 'list',
  redirect: '/list/index',
  component: () => import('@/layouts/default.vue'),
  meta: {
    title: '列表',
    sort: 1,
    isRoot: true
  },
  children: [
    {
      path: 'index',
      name: 'list_index',
      component: () => import('@/views/list/index.vue')
    }
  ]
}

export default routes
