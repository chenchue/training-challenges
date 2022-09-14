const extractData = {
    extractAppsFromAccountData: (accountData) => {
        const appsObjects = accountData.apps
        appsObjects.map((app) => app.id=app._id.split("|")[1])
        return appsObjects
    },
    extractAdminEmailFromAccountData: (accountData) => {
        return accountData.user.email
    },
    extractUserHasFeature: (hasFeatureData) => {
        console.log(hasFeatureData)
        return hasFeatureData["user-has-feature"]
    },
    extractAccountId: (accountIdData) => {
        return accountIdData.accountId
    }

}

export default extractData