'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'


import { Button } from '@/components/ui/button'

import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { BillboardColumn, columns } from './columns'
import { ApiList } from '@/components/ui/api-list'
import { DataTable } from '@/components/ui/data-table'

interface BillboardClientProps {
  data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Update your store's billboards."
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 w-4 h-4" />
          Add Billboard
        </Button>
      </div>

      <Separator />

      <DataTable columns={columns} data={data} searchKey="label" />

      <Heading
        title="API"
        description="Use this API to get the billboards for your store."
      />
      <Separator />

      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  )
}