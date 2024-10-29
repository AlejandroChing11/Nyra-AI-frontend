
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'


interface Params {
  option: { title: string, icon: JSX.Element },
  index: number
}


export function HomeCardButtons({ option, index }: Params) {

  return (
    <motion.div
      key={option.title}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
    >
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal text-white-100 hover:bg-slate-300 hover:text-slate-800  00 transition-colors duration-200"
      >
        {option.icon}
        {option.title}
      </Button>
    </motion.div>
  )

}
