import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import React from "react";
import GridGlobe from "./GridGlobe";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  id,
                                  img,
                                  imgClassname,
                                  titleClassname,
                                  spareImg
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id : number;
    img? : string;
    imgClassname? : string;
    titleClassname? : string;
    spareImg? : string;

    
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,73,1) 35%, rgba(0,212,255,1) 100%)'

            }}
        >
            <div className={`${id === 6 } && 'flex justify-center h-full'`}>
                <div className="w-full h-full absolute">
                    {img && (
                       <img 
                         src={img}
                         alt={img}  
                         className={cn(imgClassname, 'object-cover,object-center')}
                       /> 
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5  ${id === 5 && "w-full opacity-80"}`}>
                    {spareImg && (
                        <img 
                        src={spareImg} 
                        alt={spareImg} 
                         className={'object-cover,object-center w-full h-full'}
                        />
                    )}
                </div>
                {id === 6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                 </BackgroundGradientAnimation>)}

                 <div  className={cn(
                    titleClassname,"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                )}
                >
                        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                            {description}
                        </div>
                        <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                            {title}
                        </div>
                    </div>
                    {id === 2 && <GridGlobe/>}
                 </div>
            </div>
    );
};
