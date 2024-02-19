import { cn } from '@/lib/cn'

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 '
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({ header }: { header?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between transition duration-200'
      )}
    >
      {header}
    </div>
  )
}
