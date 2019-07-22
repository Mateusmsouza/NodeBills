module.exports = (App) => {

  const Auth = App.get("auth");
  App.route("/login")
      .get( (req, res) => {
        res.render('index');
      } )

  App.route("/dashboard")
      .all(Auth.authenticate())
      .get( (req, res) =>{ 
        console.log("user chegou no dashboard")
        res.render('dashboard');
      })
}