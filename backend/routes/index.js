const router = require('express').Router()
const taskRoutes = require('./task.route')

const defaultRoutes = [
    {
      path: "/tasks",
      route: taskRoutes,
    }
  ];
  
  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
  
  module.exports = router;