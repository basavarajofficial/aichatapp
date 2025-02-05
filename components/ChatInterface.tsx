export function ChatInterface() {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium mb-8 text-center">
              What can I help with?
            </h3>
            {/* Chat messages would go here */}
          </div>
        </div>

        <div className="p-4 border-t bg-gray-50">
          <div className="max-w-3xl mx-auto flex gap-2">
            <button aria-label="Microphone" className="p-2 rounded-full hover:bg-gray-200">🎤</button>
            <input
              type="text"
              placeholder="Write here..."
              className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#EF6A37]"
            />
            <button className="p-3 bg-[#EF6A37] text-white rounded-lg hover:bg-[#E05A27]">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
