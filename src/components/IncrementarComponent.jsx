import React from "react";
export const IncrementarComponent = React.memo(({ incrementar }) => {
    // React.memo memoriza el valor del contador
    console.log("me estoy redibujando");
    return <button onClick={() => incrementar(2)}>+1</button>;
});
