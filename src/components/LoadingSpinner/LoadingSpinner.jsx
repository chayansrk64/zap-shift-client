const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
        
        {/* Text */}
        <p className="mt-4 text-gray-600 font-medium text-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;