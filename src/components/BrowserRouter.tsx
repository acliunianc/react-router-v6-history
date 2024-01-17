// BrowserRouter.tsx
import { memo, useState, useLayoutEffect, type FC } from 'react'
import { Router } from 'react-router'
import type { History } from 'history'
import type { BrowserRouterProps as NativeBrowserRouterProps } from 'react-router-dom'

export interface BrowserRouterProps extends Omit<NativeBrowserRouterProps, 'window'> {
  history: History
}

export const BrowserRouter: FC<BrowserRouterProps> = memo(props => {
  const { history, ...restProps } = props
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      {...restProps}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
})
