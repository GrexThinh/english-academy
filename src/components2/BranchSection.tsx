"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const BranchSection = () => {
  const { t } = useTranslation();

  const branches = [
    {
      name: "Trụ sở chính",
      address: "L4/24, KDC Phú Gia 2, Phường Trảng Dài, tỉnh Đồng Nai",
      phone: "028 1234 5678",
    },
    {
      name: "Chi nhánh Trảng Bom 1",
      address: "Đường Hai Bà Trưng, khu phố 3, xã Trảng Bom, tỉnh Đồng Nai",
      phone: "028 2345 6789",
    },
    {
      name: "Chi nhánh Trảng Bom 2",
      address: "D06 ấp An Bình xã Hưng Thịnh tỉnh Đồng Nai",
      phone: "028 3456 7890",
    },
    {
      name: "Chi nhánh Xuân Lộc",
      address: "106B, đường Ngô Quyền, xã Xuân Lộc, tỉnh Đồng Nai",
      phone: "028 3456 7890",
    },
    {
      name: "Chi nhánh Long Thành",
      address: "Tổ 25 Khu Phước Hải, xã Long Thành, tỉnh Đồng Nai",
      phone: "028 3456 7890",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  } as const;

  return (
    <section className="pb-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate="show"
              variants={headingVariants}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {"Hệ thống trung tâm"}
              </h2>
            </motion.div>
          </h2>

          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all border border-border/40"
            >
              <h3 className="text-xl font-bold text-victoria-red mb-2">
                {branch.name}
              </h3>

              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-1 text-victoria-red shrink-0" />
                <div>
                  <p>{branch.address}</p>
                  <p className="text-sm mt-1">📞 {branch.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right - Map */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-border/40">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1QWsdYKknHKZHTC-shiJ0wWX3lpgQKU8&ehbc=2E312F"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
