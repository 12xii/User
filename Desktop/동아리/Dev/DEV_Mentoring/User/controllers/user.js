const cryptoJs = require('crypto-js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv').config();

const createUser = async (req, res) => {
    const { userPW, userEmail, userName } = req.body;

    try {
        const thisUser = await User.findOne({
            where: { userEmail }
        });

        if (thisUser) {
            console.log(thisUser)
            return res.status(409).json({
                "message": "중복된 이메일입니다.",
                thisUser
            })
        }

        const salt = crypto.randomBytes(32).toString('hex');
        const hashPassword = crypto
            .pbkdf2Sync(userPW, salt, 2, 32, "sha512")
            .toString('hex');
        
        await User.create({
            userEmail,
            userPW : hashPassword,
            userName,
            salt,
        });

        return res.status(201).json({
            "message" : "요청에 성공했습니다."
        })
    } catch (err) {
        console.error(err);
        return err;
    }
};

module.exports = {
    createUser,
}