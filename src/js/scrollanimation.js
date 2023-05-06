
  const t4 = gsap.timeline({
    scrollTrigger:{
      trigger:'.svdcsd',
      start:"top center",
      end:"bottom center",
      duration: 2,
      markers: false,
    }
  }).fromTo('.svdcsd', {y:"20%", opacity:0, display:"none"}, {y:0,opacity:1, duration: 1, display:"block"})


  const t9 = gsap.timeline(
    {            
      delay:0.3,
        scrollTrigger:{
        trigger:".section-part-two",
        start:"-300px center",
        end:"bottom center",
        markers: false,
        stagger: 5,
    }}
    ).fromTo('.section-part-two',{y:"40%", opacity:0}, {y:0, opacity:1, 
        stagger:{
            each:0.3,
            from:'left',
            ease: "power2.inOut",
        
        }}
        , "<20%");

        const t10 = gsap.timeline(
          {            
            delay:0.3,
              scrollTrigger:{
              trigger:".section-part-three",
              start:"-300px center",
              end:"bottom center",
              markers: false,
              stagger: 5,
          }}
          ).fromTo('.section-part-three',{y:"60%", opacity:0}, {y:0, opacity:1, 
              stagger:{
                  each:0.3,
                  from:'left',
                  ease: "power2.inOut",
              
              }}
              , "<20%");

              const t11 = gsap.timeline(
                {            
                  delay:0.3,
                    scrollTrigger:{
                    trigger:".section-part-four",
                    start:"-300px center",
                    end:"bottom center",
                    markers: false,
                    stagger: 5,
                }}
                ).fromTo('.section-part-four',{y:"60%", opacity:0}, {y:0, opacity:1, 
                    stagger:{
                        each:0.3,
                        from:'left',
                        ease: "power2.inOut",
                    
                    }}
                    , "<20%");
      