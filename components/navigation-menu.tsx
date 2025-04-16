'use client'

import { ComponentRef, ComponentPropsWithoutRef, forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenu,
} from '@/components/ui/navigation-menu'

export default function NavMenu() {
  return (
    <div className="flex h-16 items-center p-8">
      <Link href="/">
        <Image src="/logo.jpeg" alt="Fly-clean logo" width={48} height={48} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dịch vụ định kỳ</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="text-primary grid w-[300px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
                <LinkItem
                  title="Giặt ghế văn phòng"
                  href="/dich-vu/giat-ghe-van-phong"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Dịch vụ khác</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="text-primary grid w-[300px] gap-3 p-4 md:w-[600px] md:grid-cols-2"></ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const LinkItem = forwardRef<ComponentRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-primary hover:text-primary-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
              className,
            )}
            {...props}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)

LinkItem.displayName = 'LinkItem'
