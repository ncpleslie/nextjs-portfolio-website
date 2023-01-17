const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-t-8 border-accent1 border-t-accent2"
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingIndicator
