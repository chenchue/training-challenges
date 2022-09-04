const extractData = {
    extractAppsFromAccountData: (accountData) => {
        const appsObjects = accountData.apps
        const appsIds = appsObjects.map((app) => app._id.split("|")[1])
        return appsIds
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