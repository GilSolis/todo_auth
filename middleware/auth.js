module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
          console.log("Auth'd from ensureAuth")
        return next()
      } else {
          console.log("redirecting from ensureAuth")
        res.redirect('/')
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect('/dashboard');
      }
    },
  }