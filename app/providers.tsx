'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

