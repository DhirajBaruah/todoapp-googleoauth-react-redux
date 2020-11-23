const app = require("./app");
const { PORT, BASE_URL } = require("./util/secrets");

app.listen(PORT || 5000, () => {
  console.log(
    `Server is listen on ${BASE_URL} in ${process.env.NODE_ENV} mode`
  );
});
