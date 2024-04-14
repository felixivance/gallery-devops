var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production:
    "mongodb+srv://felixrunye:QMOXJVAcFGrOdCnp@moringa-devops-cluster.tlrmpwq.mongodb.net/gallery-devops?retryWrites=true&w=majority", //"mongodb+srv://felixrunye:QMOXJVAcFGrOdCnp@moringa-devops-cluster.tlrmpwq.mongodb.net/?retryWrites=true&w=majority&appName=moringa-devops-cluster",
  development: "mongodb://localhost:27017/", // "mongodb://localhost:27017/gallery-devops", //"mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority",
  test: "mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority",
};
// mongodb+srv://felixrunye:QMOXJVAcFGrOdCnp@moringa-devops-cluster.tlrmpwq.mongodb.net/gallery-devops?retryWrites=true&w=majority
module.exports = config;
