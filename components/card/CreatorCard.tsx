import { Button } from '@/components/ui/button'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import Image from 'next/image'

export default function Component() {
  return (
    <div className='w-full max-w-xs cursor-pointer rounded-xl border border-slate-500/50 shadow-xl'>
      <div className='relative aspect-square overflow-hidden rounded-t-xl'>
        <Image
          alt=''
          className='w-full border-b border-slate-500/50 object-cover'
          src='/assets/images/nft1.jpg'
          width={200}
          height={200}
          unoptimized
        />
        <div className='bg-gradient-to-b absolute inset-0 from-white to-white opacity-10' />
        <div className='absolute inset-0 flex items-center justify-center p-6'>
          <Button
            className='absolute right-4 top-4 border border-slate-500/50 bg-slate-700/50 backdrop-blur-sm'
            size='icon'
            variant='ghost'
          >
            <Image
              src='/assets/icons/bookmark.svg'
              alt='Bookmark'
              height={24}
              width={24}
              unoptimized
            />
            <span className='sr-only'>Bookmark</span>
          </Button>
          <Avatar className='shadow-ring-dark h-24 w-24 border-4 border-white'>
            <AvatarImage alt='@definitelymeng' src='/placeholder-user.jpg' />
            <AvatarFallback>DM</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className='p-6'>
        <div className='grid gap-1 text-center'>
          <h3 className='text-lg font-bold'>@definitelymeng</h3>
          <p className='text-sm font-medium leading-none text-gray-500 dark:text-gray-400'>
            Meng, the NFT Artist
          </p>
        </div>
        <div className='mt-4 flex flex-col gap-1.5'>
          <Button className='text-xs' variant='outline'>
            View Profile
          </Button>
          <Button className='text-xs' variant='outline'>
            Follow
          </Button>
        </div>
      </div>
    </div>
  )
}
