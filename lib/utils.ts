import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the base path for static assets
 * This matches the basePath in next.config.js
 * In development, basePath might not be needed, but in production (GitHub Pages), it's required
 */
const BASE_PATH = '/spendwise-pages'

/**
 * Helper function to get the correct path for static assets (images, etc.)
 * in static export with basePath configuration.
 * This ensures images work correctly when deployed to GitHub Pages with a basePath.
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Prepend basePath - this matches the basePath in next.config.js
  return `${BASE_PATH}${cleanPath}`
}
