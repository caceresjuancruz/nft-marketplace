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
import {
  ACCEPTED_IMAGE_TYPES,
  CreateItemFormSchema,
  MAX_FILE_SIZE
} from '@/lib/validations'
import Image from 'next/image'
import { toast } from '../ui/use-toast'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from '@/app/i18n/client'
import { useDropzone } from 'react-dropzone'
import { images } from '@/constants/images'

interface CreateItemFormProps {
  lng: string
}

const CreateItemForm = ({ lng }: CreateItemFormProps) => {
  const { t } = useTranslation(lng, 'translations')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileUrl, setFileUrl] = useState<string | null>(null)

  const onDrop = useCallback(() => {
    //TODO: Upload file to IPFS
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: {
      'image/*': ACCEPTED_IMAGE_TYPES
    },
    maxSize: MAX_FILE_SIZE
  })

  const fileStyle = useMemo(
    () =>
      `cursor-pointer border border-dashed border-gray-300 rounded-md p-4 w-full flex justify-center items-center 
      ${isDragActive && ' border-file-active'}
      ${isDragAccept && ' border-file-accept'}
      ${isDragReject && ' border-file-reject'}
      `,
    [isDragActive, isDragAccept, isDragReject]
  )

  const form = useForm<z.infer<typeof CreateItemFormSchema>>({
    resolver: zodResolver(CreateItemFormSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      image: ''
    }
  })

  async function onSubmit(values: z.infer<typeof CreateItemFormSchema>) {
    setIsSubmitting(true)
    try {
      //TODO: Create NFT
      console.log(values)
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
        className='mx-auto mt-11 space-y-12 lg:w-1/2 md:w-full sm:w-full xs:w-full'
      >
        {/* UPLOAD FILE field start */}
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='mb-3.5 font-semibold'>
                {t('uploadFile')}
              </FormLabel>
              <FormControl>
                <div>
                  <div {...getRootProps()} className={fileStyle}>
                    <Input {...getInputProps()} type='file' {...field} />
                    <div className='flexCenter flex-col text-center'>
                      <p className='text-xl font-semibold'>
                        JPG, PNG, GIF, SVG, WEBM. Max 5MB.
                      </p>
                      <div className='my-12 flex w-full justify-center'>
                        <Image
                          src={images.upload}
                          alt='Upload file'
                          width={100}
                          height={100}
                          unoptimized
                          className='object-contain'
                        />
                      </div>
                      <p className='text-sm font-semibold'>
                        {t('dragAndDropFile')}
                      </p>
                      <p className='mt-2 text-sm font-semibold'>
                        {t('orBrowseMediaOnYourDevice')}
                      </p>
                    </div>
                  </div>
                  {fileUrl && (
                    <aside>
                      <div>
                        <img src={fileUrl} alt='asset_file' />
                      </div>
                    </aside>
                  )}
                </div>
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        {/* UPLOAD FILE field end */}

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
                <div className='flexBetween flex-row rounded-md border pr-4'>
                  <Input
                    type='number'
                    step={0.01}
                    className='no-focus min-h-[56px] border-none bg-transparent outline-none focus-visible:ring-0'
                    placeholder={t('enterPrice')}
                    {...field}
                  />
                  <p className='text-xl font-semibold'>ETH</p>
                </div>
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
