module.exports = [
"[project]/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
}),
"[project]/components/ui/button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-slot'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'class-variance-authority'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? Slot : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/data/courses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// data/courses.js
__turbopack_context__.s([
    "courses",
    ()=>courses
]);
const courses = [
    {
        id: "revops",
        slug: "revenue-operations",
        title: "Revenue Operations",
        subtitle: "Master the complete RevOps framework to align sales, marketing, and customer success",
        duration: "8 Weeks",
        level: "Professional",
        cohortStart: "Immediate Access",
        instructor: "Sarah Chen, VP Revenue Operations",
        category: "Revenue Operations",
        thumbnail: "https://images.unsplash.com/photo-1660020619062-70b16c44bf0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxyZXZlbnVlJTIwYW5hbHl0aWNzfGVufDB8fHxibHVlfDE3NjE1NzEwNTV8MA&ixlib=rb-4.1.0&q=85&w=800",
        description: "Comprehensive RevOps training with hands-on projects, real-world case studies, and industry-recognized certification",
        price: "FREE",
        originalPrice: "$1,999",
        features: [
            "8 intensive modules with video lessons",
            "Practical assessments & case studies",
            "Lifetime access to course materials",
            "Professional certification",
            "LinkedIn badge & shareable certificate",
            "Community access"
        ],
        modules: [
            {
                id: "module-1",
                title: "Introduction to Revenue Operations",
                duration: "1 week",
                lessons: 4,
                hasAssessment: true,
                objective: "Introduction to the course and fundamentals of RevOps and definition.",
                content: [
                    {
                        id: "lesson-1-1",
                        type: "reading",
                        title: "Welcome to RevOps Mastery",
                        duration: "10 min",
                        content: `# Welcome to RevOps Mastery! 🎯

## Why This Course?
This course is specifically designed for GTM leaders who want to master the art and science of revenue operations. Whether you're looking to implement RevOps in your organization or advance your career, this comprehensive program provides the strategic framework and practical skills you need.

## What You'll Achieve:
- **Module Assessments**: Test your knowledge after each module to ensure mastery of key concepts
- **Professional Certificate**: Earn a recognized certification to showcase your RevOps expertise
- **Expert-Designed Curriculum**: Learn from leading RevOps professionals at PrimeRole
- **Career Growth**: Build skills that position you for leadership roles in revenue operations
- **Comprehensive Learning**: 8 structured modules from fundamentals to advanced strategies

## Course Structure:
1. **Introduction to RevOps** - Fundamentals and strategic importance
2. **Building the Revenue Engine** - Systems, Data & People alignment
3. **Revenue Data Simplified** - From chaos to clarity
4. **Process Design** - Creating predictable growth
5. **AI Meets RevOps** - Future of revenue efficiency
6. **GTM Alignment** - Cross-functional collaboration
7. **Measuring Success** - RevOps metrics that matter
8. **Scaling RevOps** - Maturity models & career growth

Ready to transform your revenue operations? Let's begin! 🚀`
                    },
                    {
                        id: "lesson-1-2",
                        type: "video",
                        title: "What is Revenue Operations?",
                        duration: "18 min",
                        videoUrl: "/videos/revops/Revops 1.1.mp4",
                        description: "Introduction to RevOps and its role in modern businesses"
                    },
                    {
                        id: "lesson-1-3",
                        type: "video",
                        title: "The Evolution of RevOps",
                        duration: "10 min",
                        videoUrl: "/videos/revops/Revops 1.2.mp4",
                        description: "Understanding the core principles and business impact and Revenue Operations has evolved from siloed departmental functions into a unified business strategy. In the past, marketing, sales, and customer success operated independently with separate goals, metrics, and tools. This created friction, data discrepancies, and revenue leakage. Today, RevOps represents a fundamental shift toward aligning all revenue-facing teams around shared objectives, common data, and integrated processes to drive sustainable growth."
                    },
                    {
                        id: "lesson-1-4",
                        type: "quiz",
                        title: "Module 1 Knowledge Check",
                        duration: "15 min",
                        questions: 5
                    }
                ]
            },
            {
                id: "module-2",
                title: "Building the Revenue Engine - Systems, Data & People",
                duration: "1 week",
                lessons: 5,
                hasAssessment: true,
                objective: "Understand the pillars that make a revenue engine work and how to align teams around shared goals.",
                content: [
                    {
                        id: "lesson-2-1",
                        type: "video",
                        title: "Mapping the Revenue Journey",
                        duration: "20 min",
                        videoUrl: "/videos/revops/Revops Mod 2.1.mp4",
                        description: "From lead to lifetime value mapping"
                    },
                    {
                        id: "lesson-2-2",
                        type: "video",
                        title: "Defining Shared Metrics",
                        duration: "15 min",
                        videoUrl: "/videos/revops/module-2-lesson-2.mp4",
                        description: "Creating unified KPIs across marketing, sales, and customer success"
                    },
                    {
                        id: "lesson-2-3",
                        type: "reading",
                        title: "People, Process & Platforms",
                        duration: "12 min",
                        content: "The three pillars of RevOps success: People (cross-functional teams with shared goals), Process (streamlined workflows and handoffs), and Platforms (integrated technology stack). When these elements work in harmony, they create a revenue engine that scales efficiently and predictably."
                    },
                    {
                        id: "lesson-2-4",
                        type: "video",
                        title: "Identifying Bottlenecks",
                        duration: "18 min",
                        videoUrl: "/videos/revops/module-2-lesson-4.mp4",
                        description: "Spotting and eliminating friction points in the revenue funnel"
                    },
                    {
                        id: "lesson-2-5",
                        type: "quiz",
                        title: "Revenue Engine Assessment",
                        duration: "20 min",
                        questions: 6
                    }
                ]
            }
        ],
        assessments: [
            {
                id: "assessment-1",
                title: "RevOps Fundamentals Assessment",
                module: "module-1",
                passingScore: 80,
                timeLimit: 15,
                questions: [
                    {
                        id: "q1",
                        question: "What is the primary goal of Revenue Operations?",
                        options: [
                            "Increase sales team size",
                            "Align sales, marketing, and customer success",
                            "Reduce marketing budget",
                            "Automate all processes"
                        ],
                        correctAnswer: "Align sales, marketing, and customer success",
                        explanation: "RevOps focuses on breaking down silos between departments to create a unified revenue engine."
                    },
                    {
                        id: "q2",
                        question: "Which department is NOT typically part of RevOps alignment?",
                        options: [
                            "Marketing",
                            "Sales",
                            "Customer Success",
                            "Product Development"
                        ],
                        correctAnswer: "Product Development",
                        explanation: "While RevOps influences many revenue-related functions, product development typically operates separately."
                    },
                    {
                        id: "q3",
                        question: "What is the main benefit of implementing RevOps?",
                        options: [
                            "Reducing headcount across departments",
                            "Creating a single source of truth for revenue data",
                            "Eliminating the need for CRM systems",
                            "Making marketing teams obsolete"
                        ],
                        correctAnswer: "Creating a single source of truth for revenue data",
                        explanation: "RevOps unifies data, processes, and goals across revenue-generating teams."
                    },
                    {
                        id: "q4",
                        question: "Which metric is most important for RevOps alignment?",
                        options: [
                            "Department-specific KPIs",
                            "Individual team performance",
                            "Shared revenue metrics",
                            "Tool utilization rates"
                        ],
                        correctAnswer: "Shared revenue metrics",
                        explanation: "Shared metrics ensure all teams are working toward common business objectives."
                    },
                    {
                        id: "q5",
                        question: "What role does technology play in RevOps?",
                        options: [
                            "It replaces human decision-making entirely",
                            "It serves as an enabler for alignment and efficiency",
                            "It's optional and not necessary for success",
                            "It creates more complexity than value"
                        ],
                        correctAnswer: "It serves as an enabler for alignment and efficiency",
                        explanation: "Technology supports RevOps by integrating systems and providing actionable insights."
                    }
                ]
            },
            {
                id: "assessment-2",
                title: "RevOps Fundamentals Assessment",
                module: "module-2",
                passingScore: 80,
                timeLimit: 15,
                questions: [
                    {
                        id: "q1",
                        question: "What is the primary goal of Revenue Operations?",
                        options: [
                            "Increase sales team size",
                            "Align sales, marketing, and customer success",
                            "Reduce marketing budget",
                            "Automate all processes"
                        ],
                        correctAnswer: "Align sales, marketing, and customer success",
                        explanation: "RevOps focuses on breaking down silos between departments to create a unified revenue engine."
                    },
                    {
                        id: "q2",
                        question: "Which department is NOT typically part of RevOps alignment?",
                        options: [
                            "Marketing",
                            "Sales",
                            "Customer Success",
                            "Product Development"
                        ],
                        correctAnswer: "Product Development",
                        explanation: "While RevOps influences many revenue-related functions, product development typically operates separately."
                    },
                    {
                        id: "q3",
                        question: "What is the main benefit of implementing RevOps?",
                        options: [
                            "Reducing headcount across departments",
                            "Creating a single source of truth for revenue data",
                            "Eliminating the need for CRM systems",
                            "Making marketing teams obsolete"
                        ],
                        correctAnswer: "Creating a single source of truth for revenue data",
                        explanation: "RevOps unifies data, processes, and goals across revenue-generating teams."
                    },
                    {
                        id: "q4",
                        question: "Which metric is most important for RevOps alignment?",
                        options: [
                            "Department-specific KPIs",
                            "Individual team performance",
                            "Shared revenue metrics",
                            "Tool utilization rates"
                        ],
                        correctAnswer: "Shared revenue metrics",
                        explanation: "Shared metrics ensure all teams are working toward common business objectives."
                    },
                    {
                        id: "q5",
                        question: "What role does technology play in RevOps?",
                        options: [
                            "It replaces human decision-making entirely",
                            "It serves as an enabler for alignment and efficiency",
                            "It's optional and not necessary for success",
                            "It creates more complexity than value"
                        ],
                        correctAnswer: "It serves as an enabler for alignment and efficiency",
                        explanation: "Technology supports RevOps by integrating systems and providing actionable insights."
                    }
                ]
            }
        ],
        certification: {
            title: "Revenue Operations",
            issuer: "PrimeRole Institute",
            validFor: "Lifetime",
            skills: [
                "RevOps Strategy",
                "Revenue Engine Design",
                "Data Analytics",
                "Process Automation",
                "Cross-functional Leadership",
                "GTM Alignment",
                "AI Integration",
                "Performance Metrics"
            ]
        }
    }
];
}),
"[project]/app/case-studies/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'next-auth/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$courses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/courses.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CaseStudiesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-4xl mx-auto py-20 px-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-8",
                children: "Case Studies"
            }, void 0, false, {
                fileName: "[project]/app/case-studies/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-12",
                children: "Explore how leading companies transformed with PrimeRole."
            }, void 0, false, {
                fileName: "[project]/app/case-studies/page.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/case-studies/lambdatest",
                        className: "bg-primary px-6 py-3 rounded-lg shadow hover:bg-secondary transition",
                        children: "LambdaTest Case Study"
                    }, void 0, false, {
                        fileName: "[project]/app/case-studies/page.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/case-studies/whatfix",
                        className: "bg-primary px-6 py-3 rounded-lg shadow hover:bg-secondary transition",
                        children: "Whatfix Case Study"
                    }, void 0, false, {
                        fileName: "[project]/app/case-studies/page.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container mx-auto px-4 py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold text-gray-900 mb-4",
                                        children: "Featured Professional Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/app/case-studies/page.js",
                                        lineNumber: 27,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                        children: "Master in-demand skills with our comprehensive certification programs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/case-studies/page.js",
                                        lineNumber: 30,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/case-studies/page.js",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$courses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"].map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/courses/${course.slug}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: course.thumbnail,
                                                            alt: course.title,
                                                            className: "w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 41,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 right-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-full px-4 py-1 text-sm font-semibold text-[#7f56d9] shadow-md",
                                                                children: course.level
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/case-studies/page.js",
                                                                lineNumber: 47,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 46,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/case-studies/page.js",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-sm text-[#7f56d9] font-semibold mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/case-studies/page.js",
                                                                    lineNumber: 56,
                                                                    columnNumber: 21
                                                                }, this),
                                                                course.category
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 55,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#7f56d9] transition-colors",
                                                            children: course.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 60,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 mb-4 line-clamp-2",
                                                            children: course.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 64,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 text-sm text-gray-500 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/case-studies/page.js",
                                                                            lineNumber: 70,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        course.duration
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/case-studies/page.js",
                                                                    lineNumber: 69,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "w-4 h-4 text-yellow-500 fill-yellow-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/case-studies/page.js",
                                                                            lineNumber: 74,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "4.9 (2,500+ reviews)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/case-studies/page.js",
                                                                    lineNumber: 73,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 68,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pt-4 border-t border-gray-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-3xl font-bold text-gray-900",
                                                                            children: course.price
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/case-studies/page.js",
                                                                            lineNumber: 81,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        course.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-400 line-through ml-2",
                                                                            children: course.originalPrice
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/case-studies/page.js",
                                                                            lineNumber: 83,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/case-studies/page.js",
                                                                    lineNumber: 80,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    className: "bg-[#7f56d9] hover:bg-[#6b4fbb] text-white",
                                                                    children: "View Course"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/case-studies/page.js",
                                                                    lineNumber: 88,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/case-studies/page.js",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/case-studies/page.js",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/case-studies/page.js",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    }, course.id, false, {
                                        fileName: "[project]/app/case-studies/page.js",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/case-studies/page.js",
                                lineNumber: 35,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-12"
                            }, void 0, false, {
                                fileName: "[project]/app/case-studies/page.js",
                                lineNumber: 98,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/case-studies/page.js",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container mx-auto px-4 py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#7f56d9] rounded-3xl p-12 text-center text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-4",
                                    children: "Ready to Transform Your Career?"
                                }, void 0, false, {
                                    fileName: "[project]/app/case-studies/page.js",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl mb-8 text-indigo-100",
                                    children: "Join thousands of professionals who have advanced their careers with PrimeRole"
                                }, void 0, false, {
                                    fileName: "[project]/app/case-studies/page.js",
                                    lineNumber: 109,
                                    columnNumber: 11
                                }, this),
                                !session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold",
                                        children: "Start Learning Today - It's FREE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/case-studies/page.js",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/case-studies/page.js",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/case-studies/page.js",
                            lineNumber: 105,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/case-studies/page.js",
                        lineNumber: 104,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/case-studies/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/case-studies/page.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_eeb20dda._.js.map