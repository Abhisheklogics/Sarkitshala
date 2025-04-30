export default function page() {
    return (
      <section className="bg-white dark:bg-gray-900 md:mt-12 mt-36 px-4 ">
        <div className="py-8 lg:py-16 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-base md:text-lg">
            Got a technical issue? Want to send feedback? Need help with your plan? We're here for you.
          </p>
  
          <form action="#" className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
  
            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Let us know how we can help you"
              />
            </div>
  
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                required
                className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  
