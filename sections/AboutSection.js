import React from 'react';

function AboutSection() {
  return (
    <section className="features section">
        <div className="container">
            <div
                className="features-inner section-inner has-bottom-divider"
            >
                <div className="features-header text-center">
                    <div className="container-sm">
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
                            <img
                                className="features-box"
                                src="dist/images/ride-share-1.jpg"
                                alt="Feature box"
                            />
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
                                    Discover
                                </h3>
                                <p className="text-sm mb-0">
                                    Lorem ipsum dolor sit amet,
                                    consecte adipiscing elit, sed do
                                    eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua
                                    dui.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature is-revealing">
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img
                                    className="asset-light"
                                    src="dist/images/feature-02-light.svg"
                                    alt="Feature 02"
                                />
                                <img
                                    className="asset-dark"
                                    src="dist/images/feature-02-dark.svg"
                                    alt="Feature 02"
                                />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title mt-0">
                                    Discover
                                </h3>
                                <p className="text-sm mb-0">
                                    Lorem ipsum dolor sit amet,
                                    consecte adipiscing elit, sed do
                                    eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua
                                    dui.
                                </p>
                            </div>
                        </div>
                    </div>
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
                                    Lorem ipsum dolor sit amet,
                                    consecte adipiscing elit, sed do
                                    eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua
                                    dui.
                                </p>
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