import { LucideProps } from 'lucide-react'

export interface ISidebarNavItem {
  id: string
  label: string
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
}
