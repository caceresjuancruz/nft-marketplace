// Purpose: This file is used to define the validation schema for the application.
import * as z from 'zod'
export const MAX_FILE_SIZE = 5000000 // 5MB
export const ACCEPTED_IMAGE_TYPES = ['.jpeg', '.jpg', '.png', '.webp']

export const CreateItemFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(100, 'Name must be at most 100 characters long'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long')
    .max(500, 'Description must be at most 500 characters long'),
  price: z.coerce
    .number()
    .min(0, 'Price must be a positive number')
    .max(1000000, 'Price must be at most 1,000,000'),
  image: z
    .any()
    .optional()
    //.refine(file => file?.size >= MAX_FILE_SIZE, 'Max image size is 5MB')
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png, .webp files are allowed'
    )
})
