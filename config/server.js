module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Đảm bảo lắng nghe trên 0.0.0.0 (host của Render)
  port: env.int('PORT', 1337), // Render sẽ tự động set PORT
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
