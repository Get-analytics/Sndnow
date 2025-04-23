import React from "react";
import { motion } from "framer-motion";

const DevicesPieChart = ({ 
  data, 
  size = 280, 
  inView 
}) => {
  const radius = size / 2;
  const centerX = radius;
  const centerY = radius;
  const innerRadius = radius * 0.6;

  const total = data.reduce((sum, item) => sum + item.value, 0);

  let currentAngle = 0;
  const slices = data.map(item => {
    const percentage = item.value / total;
    const angle = percentage * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    return {
      ...item,
      percentage,
      startAngle,
      endAngle
    };
  });

  const angleToRadians = angle => angle * (Math.PI / 180);

  const createArcPath = (startAngle, endAngle, radius) => {
    const startRad = angleToRadians(startAngle - 90);
    const endRad = angleToRadians(endAngle - 90);

    const x1 = centerX + innerRadius * Math.cos(startRad);
    const y1 = centerY + innerRadius * Math.sin(startRad);
    const x2 = centerX + innerRadius * Math.cos(endRad);
    const y2 = centerY + innerRadius * Math.sin(endRad);
    const x3 = centerX + radius * Math.cos(endRad);
    const y3 = centerY + radius * Math.sin(endRad);
    const x4 = centerX + radius * Math.cos(startRad);
    const y4 = centerY + radius * Math.sin(startRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${x1} ${y1}
      L ${x4} ${y4}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x3} ${y3}
      L ${x2} ${y2}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
      Z
    `;
  };

  const getLabelPosition = (startAngle, endAngle, radius) => {
    const angle = (startAngle + endAngle) / 2;
    const radians = angleToRadians(angle - 90);
    const labelRadius = innerRadius + (radius - innerRadius) / 2;

    return {
      x: centerX + labelRadius * Math.cos(radians),
      y: centerY + labelRadius * Math.sin(radians)
    };
  };

  const pieVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative" style={{ width: size, height: size, margin: "0 auto" }}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={pieVariants}
      >
        {slices.map((slice, index) => (
          <motion.g key={index}>
            <motion.path
              d={createArcPath(slice.startAngle, slice.endAngle, radius)}
              fill={slice.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
            {slice.percentage > 0.08 && (
              <motion.text
                x={getLabelPosition(slice.startAngle, slice.endAngle, radius).x}
                y={getLabelPosition(slice.startAngle, slice.endAngle, radius).y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontWeight="bold"
                fontSize="14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {`${Math.round(slice.percentage * 100)}%`}
              </motion.text>
            )}
          </motion.g>
        ))}
      </motion.svg>

      <div className="flex flex-wrap justify-center mt-4 gap-4">
        {data.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-700">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DevicesPieChart;
