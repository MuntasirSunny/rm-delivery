import { motion } from "framer-motion";
import React from 'react';

function AboutSection() {
  return (
    <section className="features section">
        <div className="container">
            <div
                className="features-inner section-inner has-bottom-divider"
            >
                <div className="features-header text-center">
                    <div className="container-md">
                        <h2 className="section-title mt-0">
                            About Us
                        </h2>
                        <p className="section-paragraph">
                        অরবিট ডিজিটাল সল্যুশনস লিমিটেড (ORBIT DIGITAL SOLUTIONS LTD) বিগত ৪ বছর ধরে অত্যন্ত সুনাম ও দক্ষতার সাথে দেশ ও বিদেশে বিভিন্ন ধরণের আইটি সল্যুশন প্রদান করে আসছে। করোনার সময়ে, বোরাক এক্সপ্রেস যা কিনা অরবিট এরই একটি অঙ্গপ্রতিষ্ঠান, সমগ্র ঢাকা শহরব্যাপি ডেলিভারি সার্ভিস প্রদান করেছে। বিগত ২ বছরে অরবিট দেশের বাহিরে মদ্ধপ্রাচ্য এবং ইউরোপে সার্ভিস প্রদান করে আসছে এবং দেশে ইউনিলিভার, ফুডপান্ডা, উবার এর  প্রধান আইটি ভেন্ডর হিসেবে নিজেকে প্রতিষ্ঠিত করেছে। 
                        </p>
                        <p className="section-paragraph">
                        একই ধারাবাহিকতায়, অরবিট, দুবাই ভিত্তিক প্রতিষ্ঠান আর এম ডেলিভারি সার্ভিসেস এল.এল.সি (R.M DELIVERY SERVICE L.L.C) এর সাথে ফুড ডেলিভারি, বাইক রাইডার সরবরাহের চুক্তিবদ্ধ হয়েছে। 
                        </p>
                        <div className="features-image">
                            <img
                                className="features-illustration asset-dark"
                                src="dist/images/features-illustration-dark.svg"
                                alt="Feature illustration"
                            />
                            <img
                                className="features-box asset-dark"
                                src="dist/images/features-box-dark.svg"
                                alt="Feature box"
                            />
                            <img
                                className="features-illustration asset-dark"
                                src="dist/images/features-illustration-top-dark.svg"
                                alt="Feature illustration top"
                            />
                            <img
                                className="features-illustration"
                                src="dist/images/features-illustration-light.svg"
                                alt="Feature illustration"
                            />
                            {/* <img
                                className="features-box"
                                src="dist/images/features-box-light.svg"
                                alt="Feature box"
                            /> */}
                            <motion.div
                                initial={{ x: -5 }}
                                animate={{ x: 15 }}
                                transition={{ duration: 1.5, delay: 2 }}
                            >
                                <img
                                    className="features-box"
                                    src="dist/images/ride-share-1.jpg"
                                    alt="Feature box"
                                />
                            </motion.div>

                            <img
                                className="features-illustration"
                                src="dist/images/features-illustration-top-light.svg"
                                alt="Feature illustration top"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="features-wrap">
                    <div className="feature is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img
                                    className="asset-light"
                                    src="dist/images/feature-03-light.svg"
                                    alt="Feature 03"
                                />
                                <img
                                    className="asset-dark"
                                    src="dist/images/feature-03-dark.svg"
                                    alt="Feature 03"
                                />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title mt-0">
                                    Discover
                                </h3>
                                <p className="text-sm mb-0">
                                রকিবুল এন্ড মুহাম্মদ ডেলিভারি সার্ভিসেস এল.এল.সি সফলতার সাথে দুবাই এর ডেলিভারি সার্ভিস প্রদান করে আসছে। আর এম ডেলিভারি সার্ভিসেস এল.এল.সি একটি প্রতিশ্রুতিশীল  সংগঠন যারা উন্নয়নশীল দেশের বেকার যুবকদের জন্য কাজের সুযোগ তৈরি করতে দিন-রাত কাজ করছে। 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature is-revealing">
                        <div className="feature-inner">
                            <motion.div 
                                initial={{ x: -1200 }}
                                animate={{ x: 100 }}
                                transition={{ delay: 1.5 }}
                                className="features-wrap"
                                style={{zIndex: 10}}
                                whileHover={{ scale: 1.2 }}
                            >
                                <img 
                                    src="dist/images/ride-share-mobile-app.jpg"
                                    width='70%'
                                    alt="Feature 01"
                                />
                            </motion.div>
                            <div className="feature-icon">
                                <img
                                    className="asset-light"
                                    src="dist/images/feature-01-light.svg"
                                    alt="Feature 01"
                                />
                                <img
                                    className="asset-dark"
                                    src="dist/images/feature-01-dark.svg"
                                    alt="Feature 01"
                                />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title mt-0">
                                    Opportunity
                                </h3>
                                <p className="text-sm mb-0">
                                বর্তমানে ফুড ডেলিভারি বাইক রাইডার হিসেবে আমরা কিছু রাইডার ভারত, পাকিস্তান, বাংলাদেশ এবং নেপাল থেকে সরবরাহ করছি এবং খুঁজছি।  
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="feature is-revealing">
                        <div className="feature-inner" style={{alignItems: 'center'}}>
                            <div className="feature-icon">
                                <img
                                    className="asset-light"
                                    src="dist/images/feature-01-light.svg"
                                    alt="Feature 01"
                                />
                                <img
                                    className="asset-dark"
                                    src="dist/images/feature-01-dark.svg"
                                    alt="Feature 01"
                                />
                            </div>
                            <div className="feature-content" style={{minWidth: '400px'}}>
                                <h3 className="feature-title mt-0">
                                    Packages
                                </h3>
                                <p className="text-sm mb-0">
                                আমাদের প্যাকেজে রয়েছে :-
                                </p>
                                <ul className="text-sm mb-0" style={{marginTop: 5}}>
                                    <li>এমপ্লয়মেন্ট ভিসা</li>
                                    <li>এয়ার টিকেট</li>
                                    <li>৩-৪ মাসের থাকার খরচ (কাজ শুরুর আগে পর্যন্ত)</li>
                                    <li>আরব আমিরাতে ড্রাইভিং লাইসেন্স </li>
                                    <li>বাইক</li>
                                    <li>মোবাইল সিম এবং ডাটা</li>
                                    <li>যেকোনো বিষয়ে তাৎক্ষণিক সমাধান দেবার জন্য রয়েছে বিশেষজ্ঞ দল</li>
                                </ul>
                                <br />
                                <p className="text-sm mb-0">
                                <em> ** খাবার, থাকা এবং ব্যক্তিগত খরচ প্যাকেজ বহির্ভুত </em>
                                </p>
                            </div>
                            <motion.div 
                                initial={{ x: 1200 }}
                                animate={{ x: 100 }}
                                transition={{ delay: 2 }}
                                className="features-wrap"
                                style={{zIndex: 10}}
                                whileHover={{ scale: 1.7 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <img 
                                    src="dist/images/app-share-ride.jpg"
                                    width='70%'
                                    alt="Feature 01"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="feature is-revealing">
                        <div className="feature-inner">
                            <motion.div 
                                initial={{ x: -1200 }}
                                animate={{ x: 100 }}
                                transition={{ delay: 1.5 }}
                                className="features-wrap"
                                style={{zIndex: 10}}
                                whileHover={{ scale: 1.2 }}
                            >
                                <img 
                                    src="dist/images/ability-vector.jpg"
                                    width='70%'
                                    alt="Feature 01"
                                />
                            </motion.div>
                            <div className="feature-icon">
                                <img
                                    className="asset-light"
                                    src="dist/images/feature-01-light.svg"
                                    alt="Feature 01"
                                />
                                <img
                                    className="asset-dark"
                                    src="dist/images/feature-01-dark.svg"
                                    alt="Feature 01"
                                />
                            </div>
                            <div className="feature-content" style={{minWidth: '400px'}}>
                                <h3 className="feature-title mt-0">
                                    Eligibility
                                </h3>
                                <p className="text-sm mb-0">
                                কর্মে যোগদানের জন্য আপনার প্রাথমিক যোগ্যতা :-
                                </p>
                                <ul className="text-sm mb-0" style={{marginTop: 5}}>
                                    <li>পুরুষ হতে হবে</li>
                                    <li>এসএসসি পাশ হতে হবে</li>
                                    <li>ফিজিক্যালি ফিট হতে হবে</li>
                                    <li>বয়স ২১-৩৫ বছরের মধ্যে হতে হবে</li>
                                    <li>স্মার্টফোন এ ম্যাপ নেভিগেশন এ পারদর্শী হতে হবে</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
  )
}

export default AboutSection;