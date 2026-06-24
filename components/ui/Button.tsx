import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost-dark'
  href?: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  download?: boolean | string
}

export default function Button({ 
  variant = 'primary', 
  href, 
  children, 
  className = '', 
  target,
  rel,
  download,
  ...props 
}: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost-dark'
  
  if (href) {
    return (
      <Link 
        href={href} 
        className={`${baseClass} ${className}`}
        target={target}
        rel={rel}
        download={download as any}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
