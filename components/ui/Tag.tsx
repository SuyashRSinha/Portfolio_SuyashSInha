interface TagProps {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: string
}

export default function Tag({ children, variant = 'light', className = '' }: TagProps) {
  const baseClass = variant === 'light' ? 'tag-light' : 'tag-dark'
  
  return (
    <span className={`${baseClass} ${className}`}>
      {children}
    </span>
  )
}
