import Image from 'next/image'
import UploadImage from '@/public/images/upload.jpg'
import AddOns from './add-ons'

export const metadata = {
  title: 'Post a Project - SRM Labs',
  description: 'Research & Development division of SRM University, Kattankulathur',
}

export default function PostAProject() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold font-inter mb-2">Post a project on SRM Labs</h1>
        <div className="text-gray-500">Get your project featured on SRM Labs and collaborate with top researchers and experts in various fields to bring your ideas to life.</div>
      </div>

      {/* Form */}
      <form className="mb-12">
        <div className="divide-y divide-gray-200 -my-6">
          {/* Group #1 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">1.</span> Project Information
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="projectTitle">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input id="projectTitle" className="form-input w-full" type="text" required placeholder="E.g. Building Automation System" />
              </div>
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="projectDescription">
                  Project Description <span className="text-rose-500">*</span>
                </label>
                <textarea id="projectDescription" className="form-textarea text-sm py-2 w-full" rows={4} required />
              </div>
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="projectType">
                  Project Type <span className="text-rose-500">*</span>
                </label>
                <select id="projectType" className="form-select text-sm py-2 w-full" required>
                  <option>Full Stack Development</option>
                  <option>IOT</option>
                  <option>Machine Learning</option>
                  <option>Systems Engineering</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
          </div>

          {/* Group #2 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">2.</span> Project Status
            </div>
            <div className="space-y-4">
            <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="projectStatus">
                  Project Status <span className="text-rose-500">*</span>
                </label>
                <select id="projectStatus" className="form-select text-sm py-2 w-full" required>
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="fundingStatus">
                  Funding Status <span className="text-rose-500">*</span>
                </label>
                <select id="fundingStatus" className="form-select text-sm py-2 w-full" required>
                  <option>Bootstrapped / Self-funded</option>
                  <option>University Grant</option>
                  <option>Government Grant</option>
                  <option>Industry Grant / Funding</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="collaboration">
                  Collaboration Level <span className="text-rose-500">*</span>
                </label>
                <select id="collaboration" className="form-select text-sm py-2 w-full" required>
                  <option>Intra-Lab</option>
                  <option>Inter-Lab</option>
                  <option>National</option>
                  <option>International</option>
                </select>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">3.</span> Contact Information
            </div>
            <div className="space-y-4">

            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="contactName">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <input id="contactName" className="form-input w-full" type="text" required placeholder="Enter your name here" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input id="email" className="form-input w-full" type="text" required placeholder="Your email address" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input id="phone" className="form-input w-full" type="text" required placeholder="Your contact number" />
            </div>

            <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="notes">
                  Additional Comments / Notes <span className="text-rose-500">*</span>
                </label>
                <textarea id="notes" className="form-textarea text-sm py-2 w-full" rows={4} required />
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-500">
                By submitting this information you agree to our{' '} <a className="underline" href="#0">Terms of Service</a>{' '} and{' '} <a className="underline" href="#0">Privacy Policy</a>.
              </div>
            </div>

            <div className="mt-6">
              <button className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm">Submit</button>
            </div>


            </div>
          </div>
          {/* Group #3 */}
          {/* <AddOns /> */}
        </div>
      </form>
    </>
  )
}
