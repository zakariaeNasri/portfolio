
import Particles from "react-particles-js";

const Animation = () => {
    return (
        <Particles  style={{height : "90%"}}
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type: "circle",
              stroke:{
                width:6,
                color: "#bff"
              }
            }
          }
        }}
      />
    )
}

export default Animation
