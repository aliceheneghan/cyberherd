import jwt from "jsonwebtoken";

const generateToken = (user) => {
    const payload = {sub: user._id} // create a token for this subjects _id

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: "15m"},
            (err, token) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(token);
            }
        );
    });
};

export default generateToken;