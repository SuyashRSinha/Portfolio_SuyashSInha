interface CardProps {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: string
}

export default function Card({ children, variant = 'light', className = '' }: CardProps) {
  const baseClass = variant === 'light' ? 'card-light' : 'card-dark'
  
  return (
    <div className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}
