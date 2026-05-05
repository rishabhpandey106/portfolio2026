// import { BlogComponents } from '@/components/blog/BlogComponents';
// import Container from '@/components/common/Container';
// import { Separator } from '@/components/ui/separator';
// import { generateMetadata as getMetadata } from '@/config/Meta';
// import { getGoalsContent } from '@/lib/goals';
// import { Metadata } from 'next';
// import { MDXRemote } from 'next-mdx-remote/rsc';
// import React from 'react';

// export const metadata: Metadata = {
//     ...getMetadata('/goals'),
//     robots: { index: true, follow: true },
// };

// export default function GoalsPage() {
//     const data = getGoalsContent();

//     if (!data) {
//         return (
//             <Container className="py-16">
//                 <div className="space-y-8">
//                     <div className="space-y-4 text-center">
//                         <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
//                             My Goals Before 30
//                         </h1>
//                         <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
//                             No goals found. Add `src/data/goals/goals.mdx`
//                         </p>
//                     </div>
//                     <Separator />
//                 </div>
//             </Container>
//         );
//     }

//     return (
//         <Container className="py-16">
//             <div className="space-y-8">
//                 <div className="space-y-4 text-center">
//                     <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
//                         My Top 30 Goals Before 30
//                     </h1>
//                     <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
//                         Things I want to achieve before turning 30.
//                     </p>
//                 </div>

//                 <Separator />

//                 <div className="rounded-xl border bg-background/40 p-6 md:p-8 shadow-sm">
//                     <div className="prose prose-neutral dark:prose-invert max-w-none prose-li:marker:text-primary prose-li:leading-relaxed">
//                         <MDXRemote source={data.content} components={BlogComponents} />
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// }

import { BlogComponents } from '@/components/blog/BlogComponents';
import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getGoalsContent } from '@/lib/goals';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

export const metadata: Metadata = {
    ...getMetadata('/goals'),
    robots: { index: true, follow: true },
};

export default function GoalsPage() {
    const data = getGoalsContent();

    if (!data) {
        return (
            <Container className="py-16">
                <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-bold lg:text-5xl">
                        My Goals Before 30
                    </h1>
                    <p className="text-muted-foreground">
                        No goals found. Add `src/data/goals/goals.mdx`
                    </p>
                    <Separator />
                </div>
            </Container>
        );
    }

    const items =
        data.content
            .split('\n')
            .filter((line: string) => line.trim().startsWith('-'));

    const total = items.length;

    const completed = items.filter((item: string) =>
        item.includes('<del>')
    ).length;

    const progress = Math.round((completed / total) * 100);

    return (
        <Container className="py-16">
            <div className="space-y-8">

                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        My Top 30 Goals Before 30
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                        Things I want to achieve before turning 30.
                    </p>
                </div>

                <Separator />

                <div className="max-w-xl mx-auto space-y-3 text-center">

                    <p className="text-sm text-muted-foreground">
                        {completed} of {total} goals completed
                    </p>

                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-700 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="text-xs text-muted-foreground">
                        {progress}% completed
                    </p>

                </div>

                {/* MDX Content as Cards */}
                <div
                    className="
                        max-w-none

                        [&_ul]:columns-1
                        md:[&_ul]:columns-2
                        [&_ul]:gap-6
                        [&_ul]:list-none
                        [&_ul]:p-0

                        [&_li]:break-inside-avoid
                        [&_li]:mb-6

                        [&_li]:border
                        [&_li]:rounded-xl
                        [&_li]:p-4
                        [&_li]:bg-background/70 [&_li]:backdrop-blur
                        [&_li]:shadow-sm
                        [&_li]:transition-all
                        [&_li]:hover:shadow-md
                        [&_li]:hover:-translate-y-1
                        [&_li]:hover:scale-[1.02]
                        

                        [&_li]:leading-relaxed

                        [&_del]:text-muted-foreground
                        [&_del]:line-through
                        [&_del]:opacity-70
                    "
                >
                    <MDXRemote source={data.content} components={BlogComponents} />
                </div>

            </div>
        </Container>
    );
}