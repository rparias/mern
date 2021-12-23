const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  account: '/account',
  projects: '/projects',
  project: (id) => (id ? `/projects/:${id}` : '/projects/:id'),
  admin: {
    users: '/admin/users'
  }
}

export default routes
