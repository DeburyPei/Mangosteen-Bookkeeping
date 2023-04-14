import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/Icon";
import { Time } from "../../shared/time";
import { DatetimePicker,Popup } from 'vant';
import s from "./InputPad.module.scss";
export const InputPad = defineComponent({
  props:{
    happenAt: String,
    amount: Number
  },
  setup: (props, context) => {
    const now = new Date();
    const refDate = ref<Date>(now)
  
    const appendText = (n:number|string) =>{
      // console.log()
      const nString = n.toString()
      const dotIndex = refAmount.value.indexOf('.')  // 小数点位置
      if(refAmount.value.length >= 13){ // 最大长度
          return
      }
      if(dotIndex >= 0 && refAmount.value.length - dotIndex > 2){  // 小数点只放两位
          return 
      }
      if(nString === '.'){   // 已经有小数点了   ..
        if(dotIndex >= 0){
          return
        }
      }else if(nString === '0'){
        if(dotIndex === -1){    //没有小数点   
          if(refAmount.value === '0'){  //没小数点 但是有0   最初始状态 为 0 的时候不可以再加 0
            return
          }
        }
      }else{
        if(refAmount.value === '0'){   // 不加就  011111
          refAmount.value = ''
        }
      }
      refAmount.value += n.toString()
    }
    const buttons = [
      { text: '1', onClick: () => { appendText(1) } },
      { text: '2', onClick: () => { appendText(2) } },
      { text: '3', onClick: () => { appendText(3) } },
      { text: '4', onClick: () => { appendText(4) } },
      { text: '5', onClick: () => { appendText(5) } },
      { text: '6', onClick: () => { appendText(6) } },
      { text: '7', onClick: () => { appendText(7) } },
      { text: '8', onClick: () => { appendText(8) } },
      { text: '9', onClick: () => { appendText(9) } },
      { text: '.', onClick: () => { appendText('.') } },
      { text: '0', onClick: () => { appendText(0) } },
      { text: '清空', onClick: () => { refAmount.value = '0' } },
      { text: '提交', onClick: () => context.emit('update:amount',parseFloat(refAmount.value)*100) },
    ]

    const refDatePickerVisible = ref(false)
    const showDatePicker = () => refDatePickerVisible.value = true
    const hideDatePicker = () => refDatePickerVisible.value = false
    const setDate = (date:Date) => {
      context.emit('update:happenAt',date.toISOString())
      hideDatePicker()
      // refDate.value = date;hideDatePicker()
    }
    const refAmount = ref(props.amount?(props.amount / 100).toString():'0')
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon}></Icon>
            <span>
              <span onClick={showDatePicker} >{new Time(props.happenAt).format("YYYY-MM-DD")}</span>
              <Popup v-model:show={refDatePickerVisible.value}  position="bottom">
                <DatetimePicker  v-model={props.happenAt} type="date" title="选择年月"
                  onConfirm={setDate} onCancel={hideDatePicker}/>
                </Popup>
            </span>
          </span>
          <span class={s.amount}>{refAmount.value}</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
