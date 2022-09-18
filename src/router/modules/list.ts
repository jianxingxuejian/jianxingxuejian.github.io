const routes: Route.Config = {
  path: '/list',
  name: 'list',
  redirect: '/list/all',
  component: () => import('@/layouts/default.vue'),
  meta: {
    title: '列表',
    sort: 1,
    isRoot: true
  },
  children: [
    {
      path: ':tag',
      props: true,
      name: 'list_index',
      component: () => import('@/views/list/index.vue')
    }
  ]
}

export default routes
