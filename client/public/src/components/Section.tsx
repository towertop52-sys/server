import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    containerClassName?: string;
    animate?: boolean;
}

/**
 * Section Component
 * Standardizes section spacing, container defaults, and optional animations.
 * Helps maintain a consistent look and feel across the site.
 */
export function Section({
    children,
    className,
    id,
    containerClassName,
    animate = true
}: SectionProps) {
    const content = (
        <div className={cn("container mx-auto px-4", containerClassName)}>
            {children}
        </div>
    );

    return (
        <section
            id={id}
            className={cn("py-20 md:py-24 relative overflow-hidden", className)}
        >
            {animate ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {content}
                </motion.div>
            ) : content}
        </section>
    );
}
