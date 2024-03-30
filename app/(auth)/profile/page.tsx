export const metadata = {
  title: 'My Profile - SRM Labs',
  description: 'Research & Development division of SRM University, Kattankulathur',
}

export default function MyProfile() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold font-inter mb-2">My Profile - SRM Labs</h1>
        <div className="text-gray-500">Discover and showcase your expertise in cutting-edge research projects within our vibrant community of innovators.</div>
      </div>

      {/* Form */}
      <form className="mb-12">
        <div className="divide-y divide-gray-200 -my-6">
          {/* Group #1 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">1.</span> Personal Information
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input id="fullName" className="form-input w-full" type="text" required placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input id="email" className="form-input w-full" type="text" required placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="about">
                  About Me <span className="text-rose-500">*</span>
                </label>
                <textarea id="about" className="form-textarea text-sm py-2 w-full" rows={4} required />
              </div>
            </div>
          </div>

          {/* Group #2 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">2.</span> My Interests
            </div>
            <div className="space-y-4">
            <div>
              <ul>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Full Stack Development</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">IOT</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Machine Learning & NLP</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Systems Engineering</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Others</span>
                  </label>
                </li>
              </ul>
              </div>

              <div className="mt-6">
                <button className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
