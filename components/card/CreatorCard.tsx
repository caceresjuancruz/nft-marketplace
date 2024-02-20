import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'

interface CreatorCardProps {
  avatar: string
  username: string
  name: string
  followers: number
  rank: number
}

const CreatorCard = ({
  avatar,
  username,
  name,
  followers,
  rank
}: CreatorCardProps) => {
  return (
    <div className='w-full max-w-xs cursor-pointer rounded-3xl border border-slate-500/50 shadow-xl backdrop-blur-3xl hover:border-slate-400/50'>
      <div className='relative aspect-square overflow-hidden rounded-t-xl '>
        <div className='absolute inset-0 flex items-center justify-center p-6'>
          <Avatar className='shadow-ring-dark h-24 w-24 border-4 border-white shadow-xl'>
            <AvatarImage alt='@definitelymeng' src='/placeholder-user.jpg' />
            <AvatarFallback>DM</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className='px-6 pb-6'>
        <div className='grid gap-1 text-center'>
          <h3 className='text-lg font-bold'>@definitelymeng</h3>
          <p className='text-sm font-medium leading-none text-gray-400'>
            Meng, the NFT Artist
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreatorCard
