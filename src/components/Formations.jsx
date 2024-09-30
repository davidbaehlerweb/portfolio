import React from 'react';
import { FORMATIONS } from '../constants';
import { motion } from 'framer-motion';

const Formations = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Formations
      </motion.h1>

      <div>
        {FORMATIONS.map((formation, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center">
            {/* Année de formation */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center lg:text-left"
            >
              <p className="text-sm text-neutral-400">{formation.year}</p>
            </motion.div>

            {/* Description de la formation */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {formation.company}
              </h6>
              <p className='mb-4 text-neutral-400 text-center lg:text-left'>{formation.description}</p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap justify-center lg:justify-start">
                {formation.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formations;
