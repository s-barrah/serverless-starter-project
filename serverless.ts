import type { AWS } from '@serverless/typescript';


// Functions
import functions from './resources/functions';


const serverlessConfiguration: AWS = {
  service: 'serverless-starter-project',
  frameworkVersion: '2',
  custom: {
    region: '${opt:region, self:provider.region}',
    stage: '${opt:stage, self:provider.stage}',
    prefix: '${self:service}-${self:custom.stage}',
    ['serverless-offline']: {
      httpPort: 3000,
      babelOptions: {
        presets: ["env"]
      }
    }
  },
  // Add the serverless-webpack plugin
  plugins: [
    'serverless-bundle',
    'serverless-offline',
    'serverless-dotenv-plugin'
  ],
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stage: 'dev',
    region: 'eu-west-1',
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}',
    },
  },
  functions,
}

module.exports = serverlessConfiguration;
