import { memo } from 'react'
import { Switch as HeadlessSwitch } from '@headlessui/react'

import style from './switch.module.css'

interface SwitchProps {
  children?: string
  checked?: boolean
  onChange: () => void
}

export const Switch = memo(({ children, checked, onChange }: SwitchProps) => (
  <div className='flex flex-row py-4'>
    <HeadlessSwitch.Group>
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        className={`${checked ? 'bg-gray-800' : 'bg-gray-500'} ${style.switch}`}
      >
        <span className='sr-only'>{children}</span>
        <span
          className={`${checked ? 'translate-x-5' : 'translate-x-0'} ${style.label}`}
        />
      </HeadlessSwitch>
      {children && <HeadlessSwitch.Label className='ml-2'>{children}</HeadlessSwitch.Label>}
    </HeadlessSwitch.Group>
  </div>
))

Switch.displayName = 'Switch'
