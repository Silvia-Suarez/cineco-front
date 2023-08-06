import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId : "us-east-1_z9UZpDGPY",
    ClientId : "1ucba3f3vgm301ecv9tg255eg4"
}

export default new CognitoUserPool(poolData);