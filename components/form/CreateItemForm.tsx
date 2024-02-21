'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CreateItemFormSchema } from '@/lib/validations'
import Image from 'next/image'
import { toast } from '../ui/use-toast'
import { useState } from 'react'
import { useTranslation } from '@/app/i18n/client'

interface CreateItemFormProps {
  lng: string
}

const CreateItemForm = ({ lng }: CreateItemFormProps) => {
  const { t } = useTranslation(lng, 'translations')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof CreateItemFormSchema>>({
    resolver: zodResolver(CreateItemFormSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      image: null
    }
  })

  async function onSubmit(values: z.infer<typeof CreateItemFormSchema>) {
    setIsSubmitting(true)
    try {
      //TODO: Create NFT
    } catch (error) {
      return toast({
        title: 'Something went wrong',
        description: 'Please try again later'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto mt-11 w-1/2 space-y-12'
      >
        {/* NAME field start */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='mb-3.5 font-semibold'>
                {t('name')}
              </FormLabel>
              <FormControl>
                <Input
                  className='no-focus min-h-[56px] border bg-transparent shadow-2xl'
                  placeholder={t('enterItemName')}
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        {/* NAME field end */}

        {/* DESCRIPTION field start */}
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='mb-3.5 font-semibold'>
                {t('description')}
              </FormLabel>
              <FormControl>
                <Textarea
                  minLength={10}
                  maxLength={500}
                  className='no-focus custom-scrollbar min-h-[56px] border bg-transparent shadow-2xl'
                  placeholder={t('enterDescription')}
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        {/* DESCRIPTION field end */}

        {/* PRICE field start */}
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='mb-3.5 font-semibold'>
                {t('price')}
              </FormLabel>
              <FormControl>
                <Input
                  type='number'
                  min={0}
                  max={1000000}
                  className='no-focus min-h-[56px] border bg-transparent shadow-2xl'
                  placeholder={t('enterPrice')}
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        {/* PRICE field end */}

        <div className='flex justify-end'>
          <Button
            type='submit'
            size='lg'
            className='w-fit bg-purple-500 shadow-2xl'
            disabled={isSubmitting}
          >
            {isSubmitting ? <>Creating Item ...</> : <>{t('createItem')}</>}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateItemForm
