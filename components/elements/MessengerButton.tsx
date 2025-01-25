import { FaFacebookMessenger } from "react-icons/fa";

export default function MessengerButton() {
  return (
    <a
      href="https://m.me/lathabird" // Replace with your Messenger link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-500 text-white p-2 sm:p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
    >
      <FaFacebookMessenger className="w-6 h-6" />
    </a>
  );
}
