module.exports = (App) => {

  const Auth = App.get("auth");
  App.route("/login")
      .get( (req, res) => {
        console.log(req)
        res.render('index');
      } )
}