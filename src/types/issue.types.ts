import { User } from './auth.types'
import { BaseObject } from './global.types'
import { Label } from './label.types'
import { Link } from './link.types'

export interface Issue extends BaseObject {
  description?: string | null
  is_active?: boolean | null
  issue_map?: string | null
  title: string
  owner?: User
  created_at: Date
  updated_at: Date
  seqNo: number
  status?: string | null
  labels?: Label[]
  links?: Link[]
}
