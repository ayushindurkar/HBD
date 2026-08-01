// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Wait... ❤️\nCan I celebrate the person who still makes my heart smile? 😊',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '💙 Yes',
        cancelButtonText: '😌 Of course',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            document.querySelector('.song').play();
            animationTimeline();
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
   
    const hbd = document.getElementsByClassName("wish-hbd")[0];

 

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 2.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        2.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
 .from(".hbd-chatbox",1,{
    opacity:0,
    y:20
})
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=15")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
  .staggerFromTo(
    ".baloons img",
    10,                // was 2.5
    {
        opacity: 0.9,
        y: 1800
    },
    {
        opacity: 1,
        y: -1400,
        ease: Power1.easeOut
    },
    0.6                // was 0.2
)
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: 50,
        y: 600,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
    .to(".six", 0.5, {
    opacity: 0,
    y: 30,
    zIndex: "-1",
})

.staggerFrom(".nine p", 1, ideaTextTrans, 1.2)

// Keep page 9 visible for 5 seconds
.to(".nine", 0.5, {}, "+=15")

// Fade out page 9
.to(".nine",1,{
    opacity:0,
    y:-30,
    display:"none"
})

// Show page 10
.set(".ten",{
    visibility:"visible",
    display:"flex"
})

.to(".ten",1.2,{
    opacity:1,
  ease:"power2.out"
})

// Animate title
.from(".ten-p",1,{
    scale:0.5,
    opacity:0,
  ease:"back.out(1.7)"
})

// Animate message
.from(".line1",1,{
    opacity:0,
    y:30
})
.to({},1,{}) // pause

.from(".line2",1,{
    opacity:0,
    y:30
})
.to({},1,{})

.from(".line3",1.2,{
    opacity:0,
    scale:0.8,
  ease:"elastic.out(1,0.5)"
})

// Keep ending for 6 seconds
.to(".ten",0.5,{}, "+=6");

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
// Add Typewriter helper function
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = "";
    
    // Create typing cursor element
    const cursor = document.createElement("span");
    cursor.className = "typewriter-cursor";
    element.parentNode.appendChild(cursor);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            
            // Auto-scroll the text-box as typing progresses
            const textBox = element.closest('.text-box');
            if (textBox) {
                textBox.scrollTop = textBox.scrollHeight;
            }
            
            setTimeout(type, speed);
        } else {
            cursor.remove();
            if (callback) callback();
        }
    }
    type();
}

// Inside animationTimeline function in script/main.js:
// Replace the .four section in your GSAP timeline with this:

const chatText = `My dearest Adu,

I know you saw this website before, but today I wanted it to tell a different story—a story about us.

The truth is, life gave me many memories, but you became the one I want to keep making new ones with. Every conversation, every laugh, every little fight, every moment we spend together makes my life brighter.

You are the first person I want to tell everything to, the one I miss without any reason, and the one who makes ordinary days feel extraordinary.

Thank you for loving me, believing in me, and accepting me for who I am. I promise to keep choosing you, respecting you, and loving you a little more every single day.

Happy Girlfriend's Day, my beautiful Adu. ❤️`;

tl.from(".four", 0.7, {
    scale: 0.2,
    opacity: 0,
})
.from(".fake-btn", 0.3, {
    scale: 0.2,
    opacity: 0,
})
// Pause timeline to type out text
.add((isReversed, target) => {
    const chatbox = document.querySelector(".hbd-chatbox");
    tl.pause();
    typeWriter(chatbox, chatText, 35, () => {
        // Automatically resume timeline after text finishes typing (with a small 2s pause to read)
        setTimeout(() => {
            tl.resume();
        }, 2000);
    });
})
.to(".fake-btn", 0.1, {
    backgroundColor: "rgb(127, 206, 248)",
})
.to(".four", 0.5, {
    scale: 0.2,
    opacity: 0,
    y: -150
}, "+=1")
