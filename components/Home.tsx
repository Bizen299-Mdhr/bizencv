import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"

const Home = () => {
  return (
    <div 
      className="relative min-h-screen"
      style={{
        backgroundImage: `url('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 1,
        }}
        className="min-h-screen relative flex items-center pt-20 flowing-gradient"
      >
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-red-600 mb-4">I Am Bizen Manandhar</h2>
            <h1 className="text-7xl font-bold mb-8">
              <TypewriterComponent
                options={{
                  strings: ["FREELANCER", "DEVELOPER", "DESIGNER"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay: 50,
                }}
              />
            </h1>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home

