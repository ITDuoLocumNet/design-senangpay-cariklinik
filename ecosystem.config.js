module.exports = {
  apps: [
    {
      name: 'design',
      // exec_mode: 'cluster',
      // instances: '1', // Or a number of instances
      script: 'yarn start',
      cwd: '/home/itone/design-cariklinik-com',
      // args: 'start',
      port: 3000,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
