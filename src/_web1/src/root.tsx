// @refresh reload
import './root.css'

import { CssBaseline } from '@suid/material'
import type { JSX } from 'solid-js'
import { Suspense } from 'solid-js'
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from 'solid-start'

import { api, queryClient } from '~/utils/api'

import { theme, ThemeProvider } from './lib/theme'

// eslint-disable-next-line react/function-component-definition
export default function Root(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Html lang="en">
        <Head>
          <Title>SolidStart - Bare</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta name="theme-color" content="#000000" />
          <Link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <CssBaseline />
        </Head>
        <Body>
          <Suspense>
            <api.Provider queryClient={queryClient}>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </api.Provider>
          </Suspense>
          <Scripts />
        </Body>
      </Html>
    </ThemeProvider>
  )
}
