import { COGNITO } from "../../configs/aws";
import Amplify from "aws-amplify";

const { AES, enc } = require("crypto-js");
const { decrypt, encrypt } = AES;

const message = "Hi my friend";
const key = "rocon#*34!32%";
// const messageEncrypt = encrypt(COGNITO.APP_CLIENT_ID, key).toString();
// const aesDecrypt = decrypt(messageEncrypt, key).toString(enc.Utf8);
// console.log("Encrytion : " + messageEncrypt + " decryption: " + aesDecrypt); // Hi my friend
Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: decrypt(COGNITO.USER_POOL_ID, key).toString(enc.Utf8),
  aws_user_pools_web_client_id: decrypt(COGNITO.APP_CLIENT_ID, key).toString(
    enc.Utf8
  ),
});
