import type { JSX } from 'solid-js'

import { DashboardPageTemplate } from '~/features/dashboard/templates/DashboardPageTemplate'

// eslint-disable-next-line react/function-component-definition
export default function Home(): JSX.Element {
  const listsCount = 0
  const projectsCount = 0
  const tagsCount = 0
  const itemsCount = 0

  return (
    <DashboardPageTemplate
      listsCount={listsCount}
      projectsCount={projectsCount}
      tagsCount={tagsCount}
      itemsCount={itemsCount}
    />
  )
}
