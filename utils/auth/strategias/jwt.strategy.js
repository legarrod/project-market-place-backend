const {Strategy, ExtractJwt} = require('passport-jwt');
require('dotenv').config()
const secret = process.env.SECRET_AUTH

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
    return done(null, payload)
})

module.exports = JwtStrategy