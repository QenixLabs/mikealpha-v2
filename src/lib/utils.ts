import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isExternalUrl(url?: string): boolean {
  return !!url && /^https?:\/\//i.test(url)
}

export function toArticleSlug(url?: string): string | undefined {
  if (!url) return undefined
  try {
    const pathname = new URL(url).pathname
    const slug = pathname.replace(/\/$/, '').split('/').pop()
    return slug || undefined
  } catch {
    return undefined
  }
}

export function toInternalArticleUrl(url?: string): string | undefined {
  if (!url) return undefined
  if (!isExternalUrl(url)) return url
  try {
    const pathname = new URL(url).pathname
    if (/\.[a-z0-9]+$/i.test(pathname)) return undefined
  } catch {
    return undefined
  }
  const slug = toArticleSlug(url)
  return slug ? `/article/${slug}` : undefined
}
