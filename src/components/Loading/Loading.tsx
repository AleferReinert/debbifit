export function Loading() {
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-secondary-theme z-10 gap-4'>
      <div className='border-4 border-r-primary-600 border-neutral-800 size-20 animate-spin-fast rounded-full'></div>
      <p className='animate-opacity font-light'>Carregando...</p>
    </div>
  )
}
