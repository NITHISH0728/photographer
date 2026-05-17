"use client";

import React from "react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-background">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            `}</style>
            <h2 className="text-4xl font-semibold text-center mx-auto text-foreground">About our apps</h2>
            <p className="text-base text-muted-foreground text-center mt-4 max-w-lg mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 pt-20">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-slate-100"></div>
                <div>
                    <div className="size-10 p-2 bg-muted border border-border rounded flex items-center justify-center text-xl">
                        ⚡
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-lg font-medium text-foreground">Lightning-Fast Performance</h3>
                        <p className="text-sm text-muted-foreground">Built with speed — minimal load times and optimized.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-muted border border-border rounded flex items-center justify-center text-xl">
                        🎨
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-lg font-medium text-foreground">Beautifully Designed Components</h3>
                        <p className="text-sm text-muted-foreground">Modern, pixel-perfect UI components ready for any project.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-muted border border-border rounded flex items-center justify-center text-xl">
                        🧩
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-lg font-medium text-foreground">Plug-and-Play Integration</h3>
                        <p className="text-sm text-muted-foreground">Simple setup with support for React, Next.js and Tailwind css.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-muted border border-border rounded flex items-center justify-center text-xl">
                        📖
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-lg font-medium text-foreground">Clear & Comprehensive</h3>
                        <p className="text-sm text-muted-foreground">Get started fast with usage examples, live previews and code.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-muted border border-border rounded flex items-center justify-center text-xl">
                        📦
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-lg font-medium text-foreground">Fully Customizable</h3>
                        <p className="text-sm text-muted-foreground">Easily adapt styles, colors and layout to match your brand or product.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-muted border border-border rounded flex items-center justify-center text-xl">
                        🧠
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-lg font-medium text-foreground">Accessibility First</h3>
                        <p className="text-sm text-muted-foreground">Built with WCAG standards in mind to ensure inclusive user experiences.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
