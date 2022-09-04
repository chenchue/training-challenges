
import axios from "axios"
const mdapiQueries={
    UserHasFeature: (userId, featureId) => {
        return axios.get(`http://metadatadomain.eu1.appsflyer.com:3033/metadataapi/user-has-feature/${userId}/${featureId}`)//3
    },
    getAppAccount: (appId) => {
        return axios.get(`http://metadatadomain.eu1.appsflyer.com:3033/metadataapi/get-app-acc/${appId}`) //1
    },
    getAccountData: (accountId) => {
        return axios.get(`http://metadatadomain.eu1.appsflyer.com:3033/metadataapi/get-account-data/${accountId}`)//2
    }
}

export default mdapiQueries

