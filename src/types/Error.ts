import type { PostgrestError } from '@supabase/supabase-js'

export interface CustomError extends Error {
  customCode?: number,
  statusCode?: number
}
export interface ExtendedPostgrestError extends PostgrestError {
  statusCode?: number
}
