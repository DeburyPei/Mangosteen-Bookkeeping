import { defineComponent,ref } from "vue";

export const Bar = defineComponent({
    
    setup(){
        const refCount = ref(0)
        const onClick = ()=>{refCount.value+=1}
        return () => <>
           <div>Bar</div>
        </>
    }
})