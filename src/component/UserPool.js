import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_Ly4V1q6bF",
    ClientId: "5paesu96e9qbcf4iim6s453fgk"
}


export default new CognitoUserPool(poolData);