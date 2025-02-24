import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export   const  animatePgaeIn = () => {
    const BannerOne = document.getElementById('banner1')
    const BannerTwo = document.getElementById('banner2')
    const BannerThree = document.getElementById('banner3')
    const BannerFour = document.getElementById('banner4')

    if (BannerOne && BannerTwo && BannerThree && BannerFour){
        const tl = gsap.timeline();

        tl.set([BannerOne, BannerTwo, BannerThree , BannerFour],{
            yPercent:0
        }).to([BannerOne, BannerTwo, BannerThree , BannerFour],{
            yPercent:100,
            stagger:0.2,
        })
    }

}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")
  
    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
      const tl = gsap.timeline()
  
      tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100,
      }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
          router.push(href)
        },
      })
    }
  }