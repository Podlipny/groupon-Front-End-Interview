import { memo } from 'react'

import { Switch } from './switch'

interface HeaderProps {
  checked?: boolean
  toggleGrayScale: () => void
  onRefetch: () => void
}

export const Header = memo(({ checked, toggleGrayScale, onRefetch }: HeaderProps) => (
  <div className='flex flex-col'>
    <h1 className='text-3xl pt-4'>Photo Fetcher</h1>
    <div className='flex flex-col sm:flex-row grow justify-between sm:items-center space-x-0'>
      <Switch checked={checked} onChange={toggleGrayScale}>
        Make photos grayscale
      </Switch>
      <button type='button' onClick={onRefetch} className='bg-violet-600 text-white px-4 h-8 rounded-sm'>
        Fetch New Photos
      </button>
    </div>
  </div>
))

Header.displayName = 'Header'
