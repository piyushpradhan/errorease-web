import { User } from './auth.types'
import { BaseObject } from './global.types'
import { Issue } from './issue.types'

export interface Label extends BaseObject {
  name: string
  owner?: User
  issue?: Issue[]
}
