import * as R from 'ramda'
import { Link } from 'src/types/link.types'

export function compareLinks(updated: Array<string>, storeValues: Pick<Link, 'id' | 'url' | 'note'>[]): boolean {
  if (updated.length === 0 && storeValues.length === 0) return false
  if (updated.length > 0 && storeValues.length === 0) return true

  const storeIssues = storeValues.map((link) => link.url)
  return R.intersection(storeIssues, updated).length > 0
}

export function compareDescription(updated: string, storeDescription: string): boolean {
  return updated !== storeDescription
}
