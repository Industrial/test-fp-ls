import { Grid, Typography } from '@suid/material'
import type { JSX } from 'solid-js'

import { PageContainer } from '~/components/atoms/PageContainer'
import { DefaultLayout } from '~/components/layouts/DefaultLayout'

// TODO: Set title in document
const title = 'Tags'

export const TagsPageTemplate = (): JSX.Element => {
  return (
    <DefaultLayout>
      <PageContainer>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </PageContainer>
    </DefaultLayout>
  )
}
