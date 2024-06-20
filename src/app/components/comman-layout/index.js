const { default: ReduxProvider } = require("../../../provider");

async function CommanLayout ({children}) {

    return <ReduxProvider>{children}</ReduxProvider>
}
export default CommanLayout