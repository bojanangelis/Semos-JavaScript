import React, { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

type HeaderItemProps = {
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & RefAttributes<SVGSVGElement>
  >
  title: string | number | undefined
}

const HeaderItem = ({ Icon, title }: HeaderItemProps) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem
