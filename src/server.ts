import { dirname, join } from 'node:path'
import startSubgraph from '@vuhio/core'
import config from './config'
import resolvers from './graphql/resolvers'

const schemaPath = join(dirname(import.meta.dirname), 'schema.graphql')

startSubgraph({
  typeDefs: schemaPath,
  resolvers,
  options: {
    port: config.get('port'),
  },
})
