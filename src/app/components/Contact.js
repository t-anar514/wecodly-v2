export default function Contact() {
    return (
      <div className="min-h-screen bg-[#202020] text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          {/* Page Header */}
          <h1 className="text-5xl font-bold text-[#8857F6] mb-4">Холбоо барих</h1>
          <p className="text-lg text-gray-300 mb-8">
            Манай багтай холбогдохын тулд доорх маягтыг бөглөнө үү эсвэл бидэнтэй шууд имэйлээр холбогдоорой.
          </p>
        </div>
  
        {/* Contact Form */}
        <div className="max-w-4xl w-full bg-[#2A2A2A] p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Нэр
                </label>
                <input
                  type="text"
                  placeholder="Таны нэр"
                  className="w-full bg-[#202020] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8857F6]"
                />
              </div>
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Имэйл
                </label>
                <input
                  type="email"
                  placeholder="Таны имэйл"
                  className="w-full bg-[#202020] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8857F6]"
                />
              </div>
            </div>
            {/* Message Input */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Зурвас
              </label>
              <textarea
                placeholder="Таны зурвас"
                rows="4"
                className="w-full bg-[#202020] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8857F6]"
              />
            </div>
            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#8857F6] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#6E44D9] transition-all"
              >
                Илгээх
              </button>
            </div>
          </form>
        </div>
  
        {/* Contact Information */}
        <div className="max-w-4xl w-full text-center mt-12">
          <h2 className="text-2xl font-bold text-[#8857F6] mb-4">Бидэнтэй холбогдох</h2>
          <p className="text-gray-300 mb-2">
            📧 Имэйл: <span className="text-white">hello@wecodly.mn</span>
          </p>
          <p className="text-gray-300">
            📍 Хаяг: Улаанбаатар, Монгол Улс
          </p>
        </div>
      </div>
    );
  }
  