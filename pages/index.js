import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Announcement Banner */}
      <div className="mb-12 inline-block">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-600">We&apos;ve moved</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl text-center items-center flex flex-col space-y-8">
        {/* Transition */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-semibold">
            <span className="text-gray-600">FIU Rooms</span>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600">FIU Atlas</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          We&apos;ve completely redesigned the platform to help you discover classrooms and navigate campus with ease.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <ShimmerButton
            onClick={() => window.open('https://www.fiuatlas.com', '_blank')}
            className="shadow-2xl"
          >
            <span className="flex items-center gap-2">
              Explore FIU Atlas
              <ArrowRight className="w-5 h-5" />
            </span>
          </ShimmerButton>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-50 rounded-full opacity-20 blur-3xl" />
    </div>
  );
}
