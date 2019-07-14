module.exports = (App) => {

  App.route("/")
      .get( (req, res) => {
        res.render('index');
      })
}