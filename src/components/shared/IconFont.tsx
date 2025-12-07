"use client"

import React from 'react'

export function IconFont({
  name,
  className = '',
  style,
  size,
}: {
  name: string
  className?: string
  style?: React.CSSProperties
  size?: number | string
}) {
  const classes = `iconfont icon-${name} ${className}`.trim()
  const mergedStyle: React.CSSProperties = { ...(style || {}) }
  if (size) {
    mergedStyle.fontSize = size
    mergedStyle.lineHeight = '1'
  }

  return <i className={classes} style={mergedStyle} aria-hidden />
}

export default IconFont
