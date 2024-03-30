import Image from 'next/image'
import Illustration from '@/public/images/auth-illustration.svg'
import TestimonialAuth01 from '@/public/images/testimonial-auth-01.jpg'
import TestimonialAuth02 from '@/public/images/testimonial-auth-02.jpg'
import TestimonialAuth03 from '@/public/images/testimonial-auth-03.jpg'
import HeaderLogo from '@/components/ui/header-logo'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      {/* Content */}
      <div className="min-h-screen w-full lg:w-1/2">
        <div className="h-full">
          <div className="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">
            {/* Site header */}
            <header className="flex-1 flex mb-auto">
              <div className="flex items-center justify-between h-16 md:h-20">
                <HeaderLogo />
              </div>
            </header>

            <div className="flex-1 py-8">

              {children}

            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
        {/* Bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

        {/* Illustration */}
        <div className="hidden md:block absolute right-0 pointer-events-none -z-10" aria-hidden="true">
          <Image src={Illustration} className="max-w-none" priority alt="Page Illustration" />
        </div>

        {/* Quotes */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-xl mx-auto">
              <div className="space-y-3 group">
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <Image className="rounded-full" src={TestimonialAuth01} width={88} height={88} alt="Testimonial 04" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>Working with SRM Labs has been a game-changer for our research projects. Their platform provided us with invaluable resources and connected us with experts in our field, accelerating our progress immensely.</p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Emily Parker, Research Scholar at{' '}
                        <a className="text-sky-500 hover:underline" href="https://www.srmist.edu.in/">
                          SRM University
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <Image className="rounded-full" src={TestimonialAuth02} width={88} height={88} alt="Testimonial 05" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>I highly recommend SRM Labs to anyone looking to collaborate on innovative projects. The platform is user-friendly, and the support team is incredibly responsive and helpful. It's been a pleasure working with them.</p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        John Smith, faculty at{' '}
                        <a className="text-sky-500 hover:underline" href="https://www.srmist.edu.in/">
                          SRM University
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <Image className="rounded-full" src={TestimonialAuth03} width={88} height={88} alt="Testimonial 06" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>As a researcher, finding the right collaborators is crucial. SRM Labs helped me connect with like-minded professionals and provided a platform to share ideas and resources. It's been instrumental in advancing my research goals.</p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Lisa Smith, student at{' '}
                        <a className="text-sky-500 hover:underline" href="https://www.srmist.edu.in/">
                          SRM University
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>              
  )
}