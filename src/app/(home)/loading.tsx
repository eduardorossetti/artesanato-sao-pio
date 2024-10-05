import { Skeleton } from '@/components/skeleton'

export default function HomePageLoading() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}
