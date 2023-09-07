import * as React from 'react'

export type ClientStyleContextData = {
  reset: () => void
}

export default React.createContext<ClientStyleContextData>({
  reset: () => {},
})
