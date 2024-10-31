import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";

interface Params {
  option: { title: string; icon: JSX.Element; slug: string };
  index: number;
}

export function HomeCardButtons({ option, index }: Params) {
  return (
    <motion.div
      key={option.title}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
      className="w-full"
    >
      <Link href={`forms/${option.slug}`}>
        <Button
          variant="outline"
          className="w-full flex items-center justify-start gap-2 text-left font-sans text-gray-700 bg-sky-100 hover:bg-cyan-200 hover:text-stone-700 transition-colors duration-200 rounded-lg"
        >
          {option.icon}
          <span className="truncate">{option.title}</span>
        </Button>
      </Link>
    </motion.div>
  );
}
