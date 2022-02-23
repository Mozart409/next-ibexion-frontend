import Amplify from 'aws-amplify'
export const awsConfig = {
  aws_app_analytics: 'enable',
  aws_user_pools: 'enable',
  aws_user_pools_id: 'eu-central-1_c3WdvvBTA',
  aws_user_pools_mfa_type: 'OFF',
  aws_user_pools_web_client_id: '55e0gnvm8ukkvljp8t6gn02mn1',
  aws_user_settings: 'enable',
}

Amplify.configure(awsConfig)
