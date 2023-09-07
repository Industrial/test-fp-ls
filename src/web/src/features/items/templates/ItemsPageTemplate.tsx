import { Grid, Typography } from '@suid/material'
import type { JSX } from 'solid-js'

import { PageContainer } from '~/components/atoms/PageContainer'
import { DefaultLayout } from '~/components/layouts/DefaultLayout'

// TODO: Set title in document
const title = 'Items'

export const ItemsPageTemplate = (): JSX.Element => {
  return (
    <DefaultLayout>
      <PageContainer>
        <Grid xs={12}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
        </Grid>
      </PageContainer>
    </DefaultLayout>
  )
}
