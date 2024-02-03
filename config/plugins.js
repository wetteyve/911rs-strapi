module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        keysPrefix: "911rs",
        maxAge: 2592000000, // 30 days
        debug: false,
        hitpass: false, // also cache requests with Authorization header set
        contentTypes: [
          // list of Content-Types UID to cache
          "api::page.page",
        ],
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
  },
});
