import React from "react";
import { motion } from "framer-motion";

const WeeklyBarChart = ({
  data,
  height = 280,
  mainColor = "#7C5832",
  secondaryColor = "#D4C5B4",
  inView
}) => {
  const maxValue = Math.max(...data.map(item => item.value));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const barVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: (value) => ({
      height: `${(value / maxValue) * (height - 50)}px`,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      {/* Y-axis labels - minutes */}
      <div className="flex justify-between h-full relative">
        <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
          <span>{maxValue} Min</span>
          <span>{Math.round(maxValue * 0.75)} Min</span>
          <span>{Math.round(maxValue * 0.5)} Min</span>
          <span>{Math.round(maxValue * 0.25)} Min</span>
          <span>0 Min</span>
        </div>

        {/* Horizontal grid lines */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div 
              key={i} 
              className="w-full border-t border-dashed border-gray-200"
              style={{ height: i === 4 ? '1px' : 'auto' }}
            />
          ))}
        </div>
        
        {/* Bars */}
        <motion.div 
          className="flex w-full h-full justify-between items-end px-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className="w-12 rounded-t-md"
                style={{ 
                  backgroundColor: item.isHighest ? mainColor : secondaryColor,
                }}
                custom={item.value}
                variants={barVariants}
              />
              <span className="mt-2 text-sm text-gray-600">{item.day}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WeeklyBarChart;
