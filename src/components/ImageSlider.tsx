'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SliderProps {
  images: {
    src: string
    alt: string
    title: string
    description: string
  }[]
  autoPlay?: boolean
  autoPlayInterval?: number
  priority?: boolean
}

export default function ImageSlider({ images, autoPlay = true, autoPlayInterval = 5000, priority = false }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      } else if (event.key === ' ') {
        event.preventDefault()
        setIsPaused(!isPaused)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPaused, images.length])

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, isPaused, images.length])

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg bg-gray-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image carousel"
    >
      {/* Images Container */}
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            {!failedImages.has(index) ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                {...(index === 0 && { fetchPriority: 'high' as const })}
                onLoad={() => {
                  setLoadedImages(prev => new Set(prev).add(index))
                }}
                onError={() => {
                  console.warn(`Failed to load image: ${image.src}`)
                  setFailedImages(prev => new Set(prev).add(index))
                }}
              />
            ) : (
              // Fallback gradient background
              <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
            )}
            
            {/* Loading indicator */}
            {!loadedImages.has(index) && !failedImages.has(index) && (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                  {image.description}
                </p>
                <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base">
                    Learn More
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 hover:scale-110 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 hover:scale-110 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white bg-opacity-20 hover:bg-opacity-40 hover:scale-110 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
        aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
      >
        {isPaused ? (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        )}
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-30 px-3 py-2 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        />
      </div>
    </div>
  )
}