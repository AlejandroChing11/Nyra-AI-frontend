
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import Link from 'next/link'


interface Params {
  option: { title: string, icon: JSX.Element, slug: string },
  index: number,
}


export function HomeCardButtons({ option, index }: Params) {


  return (
    <motion.div
      key={option.title}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
    >
      <Link href={`forms/${option.slug}`}>
      <Button
        variant="outline"
          className="w-full justify-start gap-1 text-left font-sans text-white-100 hover:bg-cyan-200 hover:text-stone-700  00 transition-colors duration-200 rounded-lg bg-sky-100"
      >
          {option.icon}
          {option.title}
      </Button>
      </Link>
    </motion.div>
  )

}
