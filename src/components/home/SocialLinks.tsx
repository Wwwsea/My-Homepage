"use client"

import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import qrcodeImage from '@/images/qrcode.jpg'



export default function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("mt-6 flex items-center", className)}>
            {socialLinks.map((link) => (
                // For WeChat we show an avatar image above the icon on hover
                <div key={link.name} className="relative inline-flex items-center">
                    <div className="group">
                        <Link
                            href={`${link.href}?utm_source=${utm_source}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                            <CustomIcon name={link.icon} />
                            <span className="sr-only">{link.name}</span>
                        </Link>

                        {link.icon === 'wechat' && (
                            // show above the icon and use 200x200 size
                            <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 transition-opacity duration-10 group-hover:opacity-100 z-50">
                                <div className="rounded-md overflow-visible border bg-card ring-1 ring-muted shadow-md" >
                                    <div style={{ width: 200, height: 200 }} className="flex items-center justify-center">
                                        <Image
                                          src={qrcodeImage}
                                          alt=""
                                          priority
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <Link
                href={`mailto:${email}`}
                target="_blank"
                rel="noreferrer"
                aria-label='Email'
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            >
                <CustomIcon name='email' />
                <span className="sr-only">Email</span>
            </Link>
        </div>
    )
}
