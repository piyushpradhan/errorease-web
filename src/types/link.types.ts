import { BaseObject } from './global.types'
import { Issue } from './issue.types'

export interface Link extends BaseObject {
  note?: string | null
  url: string
  issue?: Issue
}
