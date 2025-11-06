import { Collapse, Tooltip } from 'bootstrap'
import * as Turbo from '@hotwired/turbo'

declare global {
  interface Window {
    Turbo: typeof Turbo
    Collapse: typeof Collapse
    Tooltip: typeof Tooltip
  }
}

export {}
