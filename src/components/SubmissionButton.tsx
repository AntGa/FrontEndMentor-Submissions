import { Link } from "react-router-dom";

export const SubmissionButton = ({ text }: { text: string }) => {
  return (
    <Link
      to={`/${text}`}
      className="font-medium w-[305px] h-[44px] bg-[#333333] rounded-lg text-white hover:bg-[#0d6efd] transition-colors duration-300 inline-flex items-center justify-center text-center"
    >
      {text}
    </Link>
  );
};