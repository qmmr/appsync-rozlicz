import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

function App() {
  return (
    <div>
      <header>Learn how to use AWS AppSync :)</header>
      <main>
        Main content
        <AmplifySignOut />
      </main>
    </div>
  )
}

export default withAuthenticator(App)
