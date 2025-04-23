import vuhio from '@vuhio/eslint-config'

const config = await vuhio({ react: false })

export default [
  {
    ignores: ['dist', 'src/graphql/types.ts', 'src/persistance/prisma'],
  },
  ...config,
]
