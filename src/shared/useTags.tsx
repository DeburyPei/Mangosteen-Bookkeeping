import { defineComponent,onMounted,PropType,ref } from "vue";
import { http } from "./Http";
import { AxiosResponse } from "axios"


type Fetcher = (page: number) => Promise<AxiosResponse<Resources<Tag>>>


export const useTags = (fetcher : Fetcher) => {
    const page = ref(0)
    const hasMore = ref(false)
    const tags = ref<Tag[]>([])
    const fetchTags = async ()=>{
        const response = await fetcher(page.value)
        const {resources,pager } = response.data
        tags.value.push(...resources)
        hasMore.value = (pager.page - 1) * pager.per_page +  // 之前页面打印 
        resources.length < pager.count 
        page.value += 1

    }
    onMounted(fetchTags)
    return { page, hasMore, tags, fetchTags }
}
// http.get<Resources<Tag>>('/tags', {
//     kind: 'expenses',
//     page:page.value + 1,
//     _mock: 'tagIndex'
// }