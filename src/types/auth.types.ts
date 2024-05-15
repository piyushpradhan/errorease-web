import { BaseObject } from './global.types'
import { Issue } from './issue.types'
import { Label } from './label.types'

export interface User extends BaseObject {
  displayName: string
  email: string
  uid: string
  username: string
  issues?: Issue[]
  labels?: Label[]
}
