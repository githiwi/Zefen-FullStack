import passportJwt from "passport-jwt";
import User from "./models/User.js";

/**
 * configures the passport strategy for jwt validation
 * @param {*} passport - passport instance
 */
export function configureJwtStrategy(passport) {
  // configure jwt strategy 
  passport.use(
    // label for indentifying the strategy
    "jwt",
    new passportJwt.Strategy(
      // how to validate the token
      {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: (req) => req.cookies.jwt,
      },
      async (jwtPayload, done) => {
        const user = await User.findById(jwtPayload.sub);
        // this function is for manually validating the token
        console.log(jwtPayload);
        return done(null, user); // skipping manual validation
      }
    )
  );
}