const express = require("express");
const app = express();
const models = require("./models");
const mustacheExpress = require("mustache-express");

app.use(express.urlencoded());

// tell express to use mustache templating engine
app.engine("mustache", mustacheExpress());
// the pages are located in views directory
app.set("views", "./views");
// extension will be .mustache
app.set("view engine", "mustache");

app.post("/posts", (req, res) => {
  let title = req.body.title;
  let body = req.body.body;

  let post = models.Posts.build({
    title: title,
    body: body,
    isPublished: true
  });

  post.save().then(savedPost => res.redirect("posts"));
});

app.post("/edit/:postId", (req, res) => {
  let newTitle = req.body.title;
  let newBody = req.body.body;

  models.Posts.update(
    {
      title: newTitle,
      body: newBody
    },
    {
      where: {
        id: req.params.postId
      }
    }
  ).then(editedPost => res.redirect("/posts"));
});

app.post("/delete/:postId", (req, res) => {
  models.Posts.destroy({
    where: {
      id: req.params.postId
    }
  }).then(deletedPost => res.redirect("/posts"));
});

app.get("/posts/:postId", (req, res) => {
  const postId = parseInt(req.params.postId);
  models.Post.findByPk(postId).then(post => res.json(post));
});

app.get("/posts", (req, res) => {
  models.Posts.findAll().then(posts => res.render("posts", { posts: posts }));
});

app.listen(3000, () => {});
console.log("Server is running");
