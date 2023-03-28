import { defineComponent, FunctionalComponent, ref, watchEffect } from "vue";
import { RouterLink, useRouter } from "vue-router";
import pig from "../../assets/svg/pig.svg";
import { useSwipe } from "../../hooks/useSwipe";
import s from "./welcome.module.scss";
export const First = defineComponent ( {
  setup(){
    const div = ref<HTMLDivElement>()
    const router = useRouter()
    const {swiping,direction} = useSwipe(div,{
      beforeStart:e=>e.preventDefault()
    })
    watchEffect(()=>{
      if(swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })
    return () => (
      <div class={s.card} ref={div}>
        <svg>
          <use xlinkHref="#pig"></use>
        </svg>
        <h2>
          会挣钱 <br /> 还会省钱
        </h2>
      </div>
    );
  }
  
});

First.displayName = "First";
// export const First: FunctionalComponent = (props, context) => {
//   return (
//     <div class={s.card}>
//       <svg>
//         <use xlinkHref="#pig"></use>
//       </svg>
//       <h2>
//         会挣钱 <br /> 还会省钱
//       </h2>
//     </div>
//   );
// };

// First.displayName = "First";



