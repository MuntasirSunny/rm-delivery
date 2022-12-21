import { motion } from 'framer-motion';
import React from 'react';

function GetitSection() {
  return (
    <section className="cta section">
        <div className="container-sm">
            <div className="cta-inner section-inner">
            <div className="cta-header text-center">
                <h2 className="section-title mt-0">
                যোগ্যতা যাচাই করুন
                </h2>
                <p className="section-paragraph">
                আর এম ডেলিভারি সার্ভিসেস এল.এল.সি এর সাথে ফুড ডেলিভারি বাইক রাইডার হিসেবে যোগদান করতে এখনই আপনার যোগ্যতা যাচাই করুন 
                </p>
                <div className="cta-cta">
                <motion.button
                    whileHover={{
                        scale: 1.07,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="button button-primary"
                    onClick={()=>console.log('clicked!')}
                >
                    Check Now
                </motion.button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default GetitSection;