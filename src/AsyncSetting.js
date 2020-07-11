
import React,{Suspense,lazy} from 'react';
const LazyHeavy=lazy(()=>import("./Heavy"));

export default function AsyncHeavy() {
    return(
        <div>
            <Suspense fallback={<div>Loading..</div>}>
                <LazyHeavy/>
            </Suspense>
        </div>
    )

}
