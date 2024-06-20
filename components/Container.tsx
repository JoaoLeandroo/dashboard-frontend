import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return ( 
        <div className="max-w-[1920px] w-full mx-auto px-6 md:px-20">
            {children}
        </div>
     );
}
 
export default Container;