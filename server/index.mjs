/*
Write a server that has a route that accepts a given app-id and returns a response with:
* The email of the owner
* The list of apps the owner has
* If the owner has the xpend feature
You can use these resources:
http://metadatadomain.eu1.appsflyer.com:3033/metadataapi/get-app-acc/:appId




read this: https://stackoverflow.com/questions/44182951/axios-chaining-multiple-api-requests!!!!!!!!!!!!!!
*/

import mdapiQueries from './mdapiQueries.mjs'
import extractData from './extractData.mjs'
import express, { response } from 'express'
const app = express()




// app id id889063164
// 

app.get("/get-app-info/:appId", async (requst, response) => {
    const result = {}
    const appId = requst.params.appId
    try {
        const accountRes = await mdapiQueries.getAppAccount(appId)
        result.accountId = extractData.extractAccountId(accountRes.data)
        const accountDatadRes = await mdapiQueries.getAccountData(result.accountId)
        result.apps = extractData.extractAppsFromAccountData(accountDatadRes.data)
        result.admin = extractData.extractAdminEmailFromAccountData(accountDatadRes.data)
        const featureRes = await mdapiQueries.UserHasFeature(result.admin, "xpend")
        result.hasExpend = extractData.extractUserHasFeature(featureRes.data);
        console.log(result)
        //response.json(result)
    }
    catch (err) {
        console.error(err)
    }
    response.json(result)
}
)


// app.get("/thens/:appId", (requst, res) => {
    //     const result = {}
    //     const appId = requst.params.appId
    //     mdapiQueries.getAppAccount(appId)
    //         .then((response) => {
    //             result.accountId = extractData.extractAccountId(response.data)
    //             return mdapiQueries.getAccountData(result.accountId)
    //         })
    //         .then((response) => {
    //             result.apps = extractData.extractAppsFromAccountData(response.data)
    //             result.admin = extractData.extractAdminEmailFromAccountData(response.data)
    //             return mdapiQueries.UserHasFeature(result.admin, "xpend")
    //         })
    //         .then((response) => {
    //             result.hasExpend = extractData.extractUserHasFeature(response.data);
    //             console.log(result)
    //             res.json(result)
    //         }
    //         )
    //         .catch((err) => { console.log(err) })
    // })
    




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})